#!/bin/bash
#Curl the size of a body
curl -sI $1 | grep Content-Length | tail -c 4
