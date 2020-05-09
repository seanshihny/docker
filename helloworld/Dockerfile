FROM python:3-alpine

USER root

#RUN addgroup developers && \
#    adduser --uid 1001 -g developers sean && \
#    mkdir /apps && \
#    chown sean:developers /apps

RUN mkdir /apps

COPY ./index.html /apps

EXPOSE 8080/tcp

CMD [ "python3", "-m","http.server", "8080", "--directory", "/apps"] 
