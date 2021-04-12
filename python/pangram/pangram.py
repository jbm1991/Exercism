import re


def is_pangram(sentence):
    lower = sentence.lower()
    trimmed = re.sub(r"[^a-z]", "", lower)
    return len(set(trimmed)) == 26
