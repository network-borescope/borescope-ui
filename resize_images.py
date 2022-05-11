import numpy as np
from PIL import Image
from pandas import wide_to_long
import cv2
import glob

paths = glob.glob("./front/src/assets/servicos/*")

def image_resize(image, path, width = None, height = None):
    # initialize the dimensions of the image to be resized and
    # grab the image size
    dim = None
    (h, w) = image.size

    # if both the width and height are None, then return the
    # original image
    if width is None and height is None:
        return image

    # check to see if the width is None
    if width is None:
        # calculate the ratio of the height and construct the
        # dimensions
        r = height / float(h)
        dim = (int(w * r), height)

    # otherwise, the height is None
    else:
        # calculate the ratio of the width and construct the
        # dimensions
        r = width / float(w)
        dim = (width, int(h * r))

    print(dim)
    return 

print(paths)
for path in paths:
    image = Image.open(path)
    h, w = image.size
    width = None
    height = None
    if w >= h:
        width = 32
    else:
        height = 32

    image_resize(image, path, width, height)
    