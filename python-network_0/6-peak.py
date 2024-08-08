#!/usr/bin/python3
##Function that finds a peak in a list of integers


def find_peak(list_of_integers):

    if list_of_integers:
        list_of_integers.sort()

        return (list_of_integers[-1])
    else:
        return None
