FROM golang:1.19 AS build

WORKDIR /home        
ADD . /home

RUN CGO_ENABLED=0 GOOS=linux go build -o api main.go



FROM scratch

WORKDIR /home
COPY --from=build /home/api ./

CMD [ "./api" ]