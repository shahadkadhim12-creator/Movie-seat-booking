 export default class SeatService {
  constructor() {
    this.selectedSeats = new Set();
  }

  toggleSeat(seatElement) {
    const seatId = seatElement.dataset.seatId;

    if (seatElement.classList.contains("occupied")) {
      return;
    }

    seatElement.classList.toggle("selected");

    if (this.selectedSeats.has(seatId)) {
      this.selectedSeats.delete(seatId);
    } else {
      this.selectedSeats.add(seatId);
    }
  }

  getSelectedCount() {
    return this.selectedSeats.size;
  }
}