#!/usr/bin/python3
""" Extends from 7-base_geometry """


BaseGeometry = __import__("7-base_geometry").BaseGeometry


class Rectangle(BaseGeometry):
    """ Geometry """

    def __init__(self, width, height):
        """ Constructor python version """
        self.integer_validator("width", width)
        self.__width = width
        self.integer_validator("height", height)
        self.__height = height

    def area(self):
        """ area function """
        return (self.__width * self.__height)

    def __str__(self):
        """ ToString representation """
        return ("[Rectangle] {:d}/{:d}".format(self.__width, self.__height))
