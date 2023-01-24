import Cors from "cors";

const cors = Cors({
    methods: ["GET", "HEAD", "POST"],
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

// eslint-disable-next-line arrow-body-style
export const withCors = (handler) => {
    return async (req, res) => {
        await runMiddleware(req, res, cors);
        await handler(req, res);
    };
};
