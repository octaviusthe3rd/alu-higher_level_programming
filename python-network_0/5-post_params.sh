#!/bin/bash
# POST request and then displays the body reponse
curl -s -X POST -d "email=test@gmail.com&subject=I will always be here for PLD" $1
