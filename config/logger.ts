import moment from "moment";
import {createLogger, transports, format} from "winston";
import "winston-daily-rotate-file";


const formatter = format((info) => {
    const {level} = info;
    info.level = `(${moment().utc().format('DD.MM.YYYY, HH:mm:ss')}) [${level}]`;
    return info;
})();


const logger = createLogger({
    transports: [
        new transports.Console({
            format: format.combine(
                formatter,
                format.simple()
            )
        }),
        new transports.DailyRotateFile({
            format: format.combine(
                formatter,
                format.simple()
            ),
            filename: 'app-%DATE%.log',
            dirname: './logs',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxFiles: '90d',
            maxSize: '20m',
            frequency: '1h'
        })
    ]
});

export default logger;