from flask import jsonify


class InvalidUsage(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv


class Unauthorized(Exception):
    status_code = 403

    def __init__(self, message= "Missing auth token, use /auth endpoint to generate one",
                 status_code=None,
                 payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv


class NotFound(Exception):
    status_code = 404

    def __init__(self, element,
                 status_code=None,
                 payload=None):
        Exception.__init__(self)
        self.message = "The following item was not found '{}'".format(element)
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv
