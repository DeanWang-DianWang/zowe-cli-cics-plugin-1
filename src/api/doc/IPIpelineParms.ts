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

export interface IPIpelineParms {
    /**
     * The name of the pipeline
     * Up to eight characters long
     */
    name: string;

    /**
     * Description text for the URIMap
     */
    description?: string;

    /**
     * CSD group for the pipeline
     * Up to eight characters long
     */
    csdGroup?: string;

    /**
     * Enable attribute of the pipeline
     */
    status?: boolean;

    /**
     * COnfigfile, specifies the name of an HFS file that
     * contains information about the processing
     * nodes that will act on a service request,
     * and on the response.
     */
    COnfigfile?: string;

    /**
     * SHelf, specifies the 1–255 character fully-qualified
     * name of a directory (a shelf, primarily for web service
     * binding files) on z/OS UNIX..
     */
    SHelf?: string;

    /**
     * Wsdir, specifies the 1–255 character fully-qualified name
     * of the web service binding directory (also known as the
     * pickup directory) on z/OS UNIX. Each PIPELINE installed
     * in a CICS region must specify a different web service
     * binding directory.
     */
    Wsdir?: string;

    /**
     * The name of the CICS region of the pipeline
     */
    regionName: string;

    /**
     * CICS Plex of the pipeline
     */
    cicsPlex?: string;

    /**
     * CICS Plex scope of the pipeline
     */
    cicsScope?: string;
}
