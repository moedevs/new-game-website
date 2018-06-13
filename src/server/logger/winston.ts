import * as winston from 'winston';

const level = process.env.LOG_LEVEL || 'debug';

const alignedWithColorsAndTime = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`),
);

export const logger = winston.createLogger({
    level: level,
    format: alignedWithColorsAndTime,
    transports: [
        new winston.transports.File({
            filename: 'data/console.log',
            maxsize: 1024 * 1024 * 5,
            zippedArchive: true,
        }),
        new winston.transports.Console({
            format: alignedWithColorsAndTime
        })
    ]
});
