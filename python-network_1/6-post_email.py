#!/usr/bin/python3
"""Sends a request to the passed url then displays the body's response."""

import requests
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    email = {"email": sys.argv[2]}

    req = requests.post(url, data=email)
    print(req.text)
