/*
* This program and the accompanying materials are made available under the terms of the *
* Eclipse Public License v2.0 which accompanies this distribution, and is available at *
* https://www.eclipse.org/legal/epl-v20.html                                      *
*                                                                                 *
* SPDX-License-Identifier: EPL-2.0                                                *
*                                                                                 *
* Copyright Contributors to the Zowe Project.                                     *
*                                                                                 *
*/

import { AbstractSession, ICommandHandler, IHandlerParameters, IProfile, ITaskWithStatus, TaskStage } from "@zowe/imperative";
import { definePIpeline, ICMCIApiResponse } from "../../../api";
import { CicsBaseHandler } from "../../CicsBaseHandler";

import i18nTypings from "../../-strings-/en";

// Does not use the import in anticipation of some internationalization work to be done later.
const strings = (require("../../-strings-/en").default as typeof i18nTypings).DEFINE.RESOURCES.PIPELINE;

/**
 * Command handler for defining CICS pipeline via CMCI
 * @export
 * @class PIpelineHandler
 * @implements {ICommandHandler}
 */
export default class PIpelineHandler extends CicsBaseHandler {
    public async processWithSession(params: IHandlerParameters, session: AbstractSession, profile: IProfile): Promise<ICMCIApiResponse> {

        const status: ITaskWithStatus = {
            statusMessage: "Defining pipeline to CICS",
            percentComplete: 0,
            stageName: TaskStage.IN_PROGRESS
        };
        params.response.progress.startBar({task: status});

        /*
        * Git Bash on Windows attempts to replace forward slashes with a
        * directory path (e.g., /u -> U:/). CICS is picky when it validates the
        * wsbind path. Unlike typical Unix paths, it must start with one slash
        * and two are not allowed. We need to support paths prefixed with two
        * slashes so Git Bash does not tamper with them, and then strip off the
        * extra leading slash here so CICS validation will not complain.
        */
        let COnfigfile: string = params.arguments.configfile;
        if (COnfigfile.startsWith("//")) {
            COnfigfile = COnfigfile.slice(1);
        }

        let SHelf: string = params.arguments.shelf;
        if (SHelf.startsWith("//")) {
            SHelf = SHelf.slice(1);
        }

        let Wsdir: string = params.arguments.wsdir;
        if (Wsdir.startsWith("//")) {
            Wsdir = Wsdir.slice(1);
        }

        const response = await definePIpeline(session, {
            name: params.arguments.name,
            csdGroup: params.arguments.csdGroup,
            description: params.arguments.description,
            status: params.arguments.status,
            COnfigfile,
            SHelf,
            Wsdir,
            regionName: params.arguments.regionName || profile.regionName,
            cicsPlex: params.arguments.cicsPlex || profile.cicsPlex
        });

        params.response.console.log(strings.MESSAGES.SUCCESS, params.arguments.name);
        return response;
    }
}
