import swal from "sweetalert2";
import { TypeAlert } from "../enums";

export function setAlert(type: TypeAlert, title: string) {
  swal.fire({
    icon: type,
    title: title,
  });
}
