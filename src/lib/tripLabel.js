function normalizeDuration(duration) {
  return String(duration || "").trim().toLowerCase();
}

function getItineraryDayCount(itineraryDays) {
  return Array.isArray(itineraryDays) ? itineraryDays.length : 0;
}

export function getTripLabel(product) {
  if (!product) return null;

  if (product.tripType) {
    return product.tripType;
  }

  const duration = normalizeDuration(product.duration);
  const dayCount = getItineraryDayCount(product.itineraryDays);

  const isMultiDay =
    dayCount > 1 ||
    /\b\d+\s*days?\b/.test(duration) ||
    duration.includes("overnight") ||
    duration.includes("nights");

  if (isMultiDay) {
    return "Multi-day";
  }

  if (product.type === "tour" || product.type === "package") {
    return "Day trip";
  }

  return null;
}
