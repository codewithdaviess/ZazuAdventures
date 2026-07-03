function normalizeDuration(duration) {
  return String(duration || "").trim().toLowerCase();
}

function getItineraryDayCount(itineraryDays) {
  return Array.isArray(itineraryDays) ? itineraryDays.length : 0;
}

function normalizeTripLabel(label) {
  const value = String(label || "").trim().toLowerCase();

  if (!value) return null;

  if (value.includes("multi")) {
    return "MULTI DAY TRIP";
  }

  if (value.includes("day")) {
    return "DAY TRIP";
  }

  return label;
}

export function getTripLabel(product) {
  if (!product) return null;

  if (product.tripType) {
    return normalizeTripLabel(product.tripType);
  }

  const duration = normalizeDuration(product.duration);
  const dayCount = getItineraryDayCount(product.itineraryDays);

  const isMultiDay =
    dayCount > 1 ||
    /\b\d+\s*days?\b/.test(duration) ||
    duration.includes("overnight") ||
    duration.includes("nights");

  if (isMultiDay) {
    return "MULTI DAY TRIP";
  }

  if (product.type === "tour" || product.type === "package") {
    return "DAY TRIP";
  }

  return null;
}
