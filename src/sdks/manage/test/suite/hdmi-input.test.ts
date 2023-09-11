/*
 * Copyright 2021 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { test, expect } from "@jest/globals";
import { HDMIInput } from "../../build/javascript/src/firebolt-manage";

test("HDMIInput.ports()", () => {
  return HDMIInput.ports().then((ports: HDMIInput.HDMIInputPort[]) => {
    expect(ports[0].edidVersion).toBe(HDMIInput.EDIDVersion.V2_0)
  });
});

test("HDMIInput.edidVersion()", () => {
    return HDMIInput.edidVersion()
})