#!/usr/bin/python3
"""
extends 9-rectangle
"""


Rectangle = __import__('9-rectangle').Rectangle


class Square(Rectangle):
    """
    class square
    """
    def __init__(self, size):
        """
        Python constructor
        """
        self.integer_validator("size", size)
        self.__size = size
        super().__init__(size, size)
