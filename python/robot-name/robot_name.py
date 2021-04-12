from random import choice, seed
from string import ascii_uppercase, digits


class Robot:
    def __init__(self):
        self.name = self.generate_name()

    def generate_name(self):
        name_chars = "".join(choice(ascii_uppercase) for i in range(2))
        name_digits = "".join(choice(digits) for i in range(3))
        return f"{name_chars}{name_digits}"

    def reset(self):
        seed()
        self.name = self.generate_name()
