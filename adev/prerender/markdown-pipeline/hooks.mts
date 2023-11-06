/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {resetHeaderIdsOfCurrentDocument} from './state.mjs';

/**
 * Custom hooks for marked that will be used to post-transform markdown files with parent styles for Angular docs.
 */
export const hooks = {
  preprocess(html: string): string {
    resetHeaderIdsOfCurrentDocument();
    return html;
  },
  postprocess(html: string): string {
    return html;
  },
};
