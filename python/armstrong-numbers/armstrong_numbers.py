from functools import reduce


def is_armstrong_number(number):
    raised = digits_raised_to_power(number)
    total = reduce(lambda a, b: a + b, raised)
    return number == total


def digits_raised_to_power(number):
    power = len(str(number))
    return [int(i) ** power for i in str(number)]
