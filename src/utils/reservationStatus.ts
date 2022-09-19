enum BookingStatus {
  COMFIRMADA = "confirmada",
  CANCELADA = "cancelada",
  CHECKIN = "check-in",
  CHECKOUT = "check-out",
}

function updateStatus(opc: string) {
  switch (opc) {
    case BookingStatus.CANCELADA:
      return "cancelada";
    case BookingStatus.CHECKIN:
      return "check-in";
    case BookingStatus.CHECKOUT:
      return "check-out";
    default:
      throw new Error('Status incorreto');
  }
}

export { BookingStatus, updateStatus };
