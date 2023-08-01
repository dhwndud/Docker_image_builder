#!/bin/bash

SERVICE="docker-image-builder"
DOCKER_URL=""
PYPI_PASSWORD=""
DOCKER_ACCESS_ID=""
DOCKER_PASSWORD=""
SERVICE_TYPE=""
VERSION=""

#pip 비밀번호 입력
function set_pypi_password()
{
    printf "PYPI_PASSWORD : "
    read -s PYPI_PASSWORD
    echo ""
}

#private docker hub 계정 정보 입력
function set_docker_credential()
{
    printf "Docker ACCESS_ID : "
    read -s DOCKER_ACCESS_ID
    echo ""

    printf "Docker Password : "
    read -s DOCKER_PASSWORD
    echo ""
}

# 도커 빌드, 푸시할 타입 설정
function set_build_type()
{
    read -p "REAL OR TEST : " SERVICE_TYPE
    read -p "version : " VERSION
    if [ "$SERVICE_TYPE" = "REAL" ]; then
        SERVICE="mdp-epp"
    else
        SERVICE="mdp-epp:test-"
    fi

}

# 도커 빌드
function build_docker()
{
    # latest 버전으로 이미지 카피
    if [ "$SERVICE_TYPE" = "REAL" ]; then
        SERVICE="mdp-epp"
        # 도커 빌드
        docker build \
        --tag $DOCKER_URL/$SERVICE:$VERSION \
        --no-cache \
        --build-arg PYPI_USER_PW=$PYPI_PASSWORD \
        .

        docker image tag $DOCKER_URL/$SERVICE:$VERSION $DOCKER_URL/$SERVICE:latest
    else
        SERVICE="mdp-epp:test"
        docker build \
        --tag $DOCKER_URL/$SERVICE-$VERSION \
        --no-cache \
        --build-arg PYPI_USER_PW=$PYPI_PASSWORD \
        .
        docker image tag $DOCKER_URL/$SERVICE-$VERSION $DOCKER_URL/$SERVICE-latest
    fi
}

# 도커 푸시
function push_docker()
{
    # Docker Private Hub Login
    aws ecr get-login-password --region ap-northeast-1 | \
    docker login --username AWS --password-stdin 645388002535.dkr.ecr.ap-northeast-1.amazonaws.com

     # latest 버전으로 이미지 카피
    if [ "$SERVICE_TYPE" = "REAL" ]; then
        SERVICE="mdp-epp"
        # 도커 빌드


        # Docker Private Hub에 Push
        docker push $DOCKER_URL/$SERVICE:$VERSION
        docker push $DOCKER_URL/$SERVICE:latest

    else
        SERVICE="mdp-epp:test"

        # Docker Private Hub에 Push
        docker push $DOCKER_URL/$SERVICE-$VERSION
        docker push $DOCKER_URL/$SERVICE-latest

    fi

}

#dos2unix app/prestart.sh
#dos2unix app/start.sh

# 추가 파라미터에 따른 build, push 분기
if [ "$1" = "build" ]; then
    set_pypi_password
    set_build_type
    build_docker
elif [ "$1" = "push"  ]; then
    set_build_type
    set_docker_credential
    push_docker
fi

# 빌드 버전 자동화 가능성?
#OUTPUT=$( docker images --format "table {{.ID}}\t{{.Repository}}\t{{.Tag}}" | grep "${SERVICE}" | sort -k 2 -h)
#echo ${OUTPUT}
