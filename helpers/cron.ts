import cron from "node-cron";
import {PARSER_CRON} from "../config/settings";
import {generalParser} from "./parsers/generalParser";
import logger from "../config/logger";

export const parserCron = cron.schedule(PARSER_CRON, () => {
    generalParser()
        .then(() => logger.info(`General parsing has been completed`))
        .catch((e) => logger.error(`General parsing ${e}`))
})