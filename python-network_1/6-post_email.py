#!/usr/bin/python3
""" Python script that sends a request to the passed, and
finally displays the body of the response."""

import requests
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    email = {"email": sys.argv[2]}

    req = requests.post(url, data=email)
    print(req.text)
