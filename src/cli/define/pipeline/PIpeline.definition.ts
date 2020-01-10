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

import { ICommandDefinition } from "@zowe/imperative";

import i18nTypings from "../../-strings-/en";

// Does not use the import in anticipation of some internationalization work to be done later.
const strings = (require("../../-strings-/en").default as typeof i18nTypings).DEFINE.RESOURCES.PIPELINE;

export const PIpelineDefinition: ICommandDefinition = {
    name: "pipeline", aliases: ["pi"],
    description: strings.DESCRIPTION,
    handler: __dirname + "/PIpeline.handler",
    type: "command",
    positionals: [{
        name: "name",
        description: strings.POSITIONALS.PIIPELINENAME,
        type: "string",
        required: true
    }, {
        name: "csdGroup",
        description: strings.POSITIONALS.CSDGROUP,
        type: "string",
        required: true
    }],
    options: [
        {
            name: "description",
            aliases: ["desc"],
            description: strings.OPTIONS.DESCRIPTION,
            type: "string"
        },
        {
            name: "status",
            description: strings.OPTIONS.STATUS,
            type: "boolean",
            defaultValue: true
        },
        {
            name: "configfile",
            aliases: ["cf"],
            description: strings.OPTIONS.CONFIGFILE,
            type: "string",
            required: true
        },
        {
            name: "shelf",
            description: strings.OPTIONS.SHELF,
            type: "string",
            required: true
        },

        {
            name: "wsdir",
            description: strings.OPTIONS.WSDIR,
            type: "string"
        },
        {
            name: "region-name",
            description: strings.OPTIONS.REGIONNAME,
            type: "string"
        },
        {
            name: "cics-plex",
            description: strings.OPTIONS.CICSPLEX,
            type: "string"
        },
        {
            name: "cics-scope",
            description: strings.OPTIONS.CICSSCOPE,
            type: "string"
        }],
    profile: {optional: ["cics"]},
    examples: [{
        description: strings.EXAMPLES.EX1,
        options: "PIPLTEST MYGRP --configfile /u/exampleapp/CICSApp.xml --shelf /u/exampleapp --wsdir /u/exampleapp --region-name MYREGION"
    }]
};
