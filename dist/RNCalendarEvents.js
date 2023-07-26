"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeStatus = void 0;
var AttendeeStatus;
(function (AttendeeStatus) {
  AttendeeStatus["IOSAccepted"] = "Accepted";
  AttendeeStatus["IOSCompleted"] = "Completed";
  AttendeeStatus["IOSDeclined"] = "Declined";
  AttendeeStatus["IOSDelegated"] = "Delegated";
  AttendeeStatus["IOSInProcess"] = "InProcess";
  AttendeeStatus["IOSPending"] = "Pending";
  AttendeeStatus["IOSTentative"] = "Tentative";
  AttendeeStatus["IOSUnknown"] = "Unknown";
  AttendeeStatus[(AttendeeStatus["AndroidNone"] = 0)] = "AndroidNone";
  AttendeeStatus[(AttendeeStatus["AndroidAccepted"] = 1)] = "AndroidAccepted";
  AttendeeStatus[(AttendeeStatus["AndroidDeclined"] = 2)] = "AndroidDeclined";
  AttendeeStatus[(AttendeeStatus["AndroidInvited"] = 3)] = "AndroidInvited";
  AttendeeStatus[(AttendeeStatus["AndroidTentative"] = 4)] = "AndroidTentative";
})(AttendeeStatus || (exports.AttendeeStatus = AttendeeStatus = {}));
