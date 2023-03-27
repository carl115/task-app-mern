import swal from "sweetalert2";
import { TypeAlert } from "../types";

export function setAlert(type: TypeAlert, title: string) {
  swal.fire({
    icon: type,
    title: title,
  });
}
