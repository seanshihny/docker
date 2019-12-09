FROM python:3-alpine

USER root

RUN addgroup --gid 1001 developers && \
    adduser --uid 1001 --gid 1001 sean && \
    mkdir /apps && \
    chown sean:developers /apps 

USER 1001

COPY ./index.html /apps

EXPOSE 8080/tcp

CMD [ "python3", "-m","http.server", "8080", "--directory", "/apps"] 
