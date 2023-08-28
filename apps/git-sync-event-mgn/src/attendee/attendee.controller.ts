import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AttendeeService } from "./attendee.service";
import { AttendeeControllerBase } from "./base/attendee.controller.base";

@swagger.ApiTags("attendees")
@common.Controller("attendees")
export class AttendeeController extends AttendeeControllerBase {
  constructor(
    protected readonly service: AttendeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
