import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import {
  activities,
  company,
  destinations,
  getProductBySlug,
} from "../data/content";
import { saveLastBooking } from "../lib/bookingStorage";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import ExpandableText from "../components/shared/ExpandableText";
import {
  CalendarDays,
  Mail,
  Phone,
  User,
  BadgeCheck,
  BadgeX,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Image as ImageIcon,
  Info,
  Layers,
  MapPin,
  Pencil,
  Plus,
  Sparkles,
  Trash2,
  Users,
} from "lucide-react";

function List({ title, items, icon: Icon }) {
  if (!items?.length) return null;
  return (
    <div className="mt-8">
      <h2 className="text-md font-semibold">{title}</h2>
      <ul className="mt-4 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            {Icon ? (
              <Icon size={16} className="mt-0.5 shrink-0 text-[#223441]" />
            ) : (
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#223441]" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Counter({ label, value, onChange, min = 0 }) {
  return (
    <div className="flex items-center justify-between rounded-sm border border-gray-300 px-4 py-3">
      <div>
        <div className="font-medium text-gray-900">{label}</div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-gray-300 bg-gray-50 text-lg font-semibold hover:bg-gray-100"
        >
          -
        </button>

        <span className="min-w-[30px] text-center text-sm font-semibold">
          {value}
        </span>

        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-gray-300 bg-gray-50 text-lg font-semibold hover:bg-gray-100"
        >
          +
        </button>
      </div>
    </div>
  );
}

function Gallery({ images }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  if (!images?.length) return null;

  const MAX_PREVIEW = 10;
  const previewImages = images.slice(0, MAX_PREVIEW);

  const isFirst = index === 0;
  const isLast = index === images.length - 1;

  function openModal(startIndex = 0) {
    setIndex(startIndex);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  function prev() {
    if (!isFirst) setIndex((i) => i - 1);
  }

  function next() {
    if (!isLast) setIndex((i) => i + 1);
  }

  return (
    <div>
      {/* MAIN IMAGE */}
      <div className="relative w-full overflow-hidden rounded-sm border border-gray-300 bg-white">
        <img
          src={images[index]}
          alt={`Gallery ${index + 1}`}
          className="h-80 w-full object-cover"
        />

        {/* LEFT */}
        <button
          onClick={prev}
          disabled={isFirst}
          className={`absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-3 transition
    ${
      isFirst
        ? "bg-black/40 text-white/40 cursor-not-allowed"
        : "bg-black/40 text-white hover:bg-black/70"
    }`}
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          disabled={isLast}
          className={`absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-3 transition
    ${
      isLast
        ? "bg-black/40 text-white/40 cursor-not-allowed"
        : "bg-black/40 text-white hover:bg-black/70"
    }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2 w-full">
        {Array.from({ length: 6 }).map((_, i) => {
          const isMobile =
            typeof window !== "undefined" && window.innerWidth < 640;

          const limit = isMobile ? 3 : 6;
          const isHiddenOnMobile = i >= limit;

          const src = previewImages[i];
          const isLastSlot = i === limit - 1;

          if (isHiddenOnMobile) return null;

          return (
            <button
              key={i}
              onClick={() => {
                if (isLastSlot) {
                  openModal(0);
                } else {
                  openModal(i);
                }
              }}
              className={`relative h-16 w-full overflow-hidden rounded-sm border ${
                i === index ? "border-[#223441]" : "border-gray-300"
              }`}
            >
              {/* IMAGE */}
              {src && (
                <img src={src} alt="" className="h-full w-full object-cover" />
              )}

              {/* VIEW ALL */}
              {isLastSlot && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 text-white text-xs font-semibold">
                  View All
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black p-4" onClick={closeModal}>
          <div
            className="mx-auto flex h-full max-w-6xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between py-3 text-white">
              <div>
                Photo {index + 1} of {images.length}
              </div>
              <button onClick={closeModal}>Close</button>
            </div>

            {/* IMAGE */}
            <div className="relative flex-1 flex items-center justify-center">
              <img
                src={images[index]}
                className="max-h-full max-w-full object-contain"
              />

              {/* ARROWS */}
              {/* LEFT */}
              <button
                onClick={prev}
                disabled={isFirst}
                className={`absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-3 transition
    ${
      isFirst
        ? "bg-black/40 text-white/40 cursor-not-allowed"
        : "bg-black/40 text-white hover:bg-black/70"
    }`}
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                disabled={isLast}
                className={`absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-3 transition
    ${
      isLast
        ? "bg-black/40 text-white/40 cursor-not-allowed"
        : "bg-black/40 text-white hover:bg-black/70"
    }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ItineraryEditor({ itineraryDays, onChangePlan }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(
    itineraryDays.map((d) => ({
      ...d,
      locationId: d.locationId || "",
      activityIds: Array.isArray(d.activityIds) ? d.activityIds : [],
    })),
  );
  const [savedDraft, setSavedDraft] = useState(
    itineraryDays.map((d) => ({
      ...d,
      locationId: d.locationId || "",
      activityIds: Array.isArray(d.activityIds) ? d.activityIds : [],
    })),
  );
  const [copied, setCopied] = useState(false);

  function updateDay(index, patch) {
    setDraft((current) =>
      current.map((day, i) => (i === index ? { ...day, ...patch } : day)),
    );
  }

  function addDay() {
    setDraft((current) => [
      ...current,
      {
        day: current.length + 1,
        title: "New day",
        locationId: "",
        details: "",
        activityIds: [],
      },
    ]);
  }

  function removeDay(index) {
    setDraft((current) => current.filter((_, i) => i !== index));
  }

  const normalized = useMemo(
    () => draft.map((d, index) => ({ ...d, day: index + 1 })),
    [draft],
  );

  const destinationsById = useMemo(() => {
    return new Map(destinations.map((d) => [d.id, d]));
  }, []);

  const itineraryText = useMemo(() => {
    return normalized
      .map((d) => {
        const locationName = d.locationId
          ? destinationsById.get(d.locationId)?.name || d.locationId
          : "";
        const header = `Day ${d.day}: ${d.title}${
          locationName ? ` (${locationName})` : ""
        }`;
        const selectedActivities = activities
          .filter((a) => d.activityIds.includes(a.id))
          .map((a) => `- ${a.title} ($${a.price}/person)`)
          .join("\n");

        return [
          header,
          d.details,
          selectedActivities ? `Activities:\n${selectedActivities}` : null,
        ]
          .filter(Boolean)
          .join("\n");
      })
      .join("\n\n");
  }, [destinationsById, normalized]);

  const addOnsPerPerson = useMemo(() => {
    const priceById = new Map(
      activities.map((a) => [a.id, Number(a.price) || 0]),
    );
    return normalized.reduce((sum, d) => {
      const daySum = d.activityIds.reduce(
        (dayTotal, id) => dayTotal + (priceById.get(id) || 0),
        0,
      );
      return sum + daySum;
    }, 0);
  }, [normalized]);

  const plan = useMemo(
    () => ({
      itineraryDays: normalized,
      itineraryText,
      addOnsPerPerson,
    }),
    [addOnsPerPerson, itineraryText, normalized],
  );

  React.useEffect(() => {
    onChangePlan?.(plan);
  }, [onChangePlan, plan]);

  const isDirty = useMemo(() => {
    return JSON.stringify(draft) !== JSON.stringify(savedDraft);
  }, [draft, savedDraft]);

  function saveEdits() {
    setSavedDraft(draft);
    setIsEditing(false);
  }

  function revertEdits() {
    setDraft(savedDraft);
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(itineraryText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <div className="mt-10 rounded-sm border border-gray-300 bg-white p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-md font-semibold">Itinerary</h2>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={copyToClipboard}
            className="text-sm font-medium text-[#223441] hover:underline"
          >
            {copied ? "Copied" : "Copy itinerary"}
          </button>
          <button
            type="button"
            onClick={() => setIsEditing((v) => !v)}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#223441] hover:underline"
          >
            <Pencil size={16} />
            {isEditing ? "Stop editing" : "Edit itinerary"}
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {normalized.map((day, index) => (
          <div
            key={`${day.day}-${index}`}
            className="rounded-sm border border-gray-200 p-4"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="text-xs font-semibold text-gray-600">
                  Day {day.day}
                </div>

                {!isEditing ? (
                  <>
                    <div className="mt-1 text-sm font-semibold text-gray-900">
                      {day.title}
                    </div>
                    {day.locationId ? (
                      <div className="mt-1 text-xs text-gray-600">
                        {destinationsById.get(day.locationId)?.name ||
                          day.locationId}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <input
                      value={day.title}
                      onChange={(e) =>
                        updateDay(index, { title: e.target.value })
                      }
                      className="w-full rounded-sm border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Title"
                    />
                    <select
                      value={day.locationId}
                      onChange={(e) =>
                        updateDay(index, {
                          locationId: e.target.value,
                          activityIds: [],
                        })
                      }
                      className="w-full rounded-sm border border-gray-300 px-3 py-2 text-sm"
                    >
                      <option value="">Select location</option>
                      {destinations.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {isEditing ? (
                <button
                  type="button"
                  onClick={() => removeDay(index)}
                  className="inline-flex items-center gap-2 text-xs font-medium text-white rounded-sm bg-red-500 py-2 px-3 hover:text-white/80"
                >
                  <Trash2 size={16} />
                  Remove
                </button>
              ) : null}
            </div>

            {!isEditing ? (
              <p className="mt-3 text-sm text-gray-700 leading-7">
                {day.details}
              </p>
            ) : (
              <textarea
                value={day.details}
                onChange={(e) => updateDay(index, { details: e.target.value })}
                rows={3}
                className="mt-3 w-full rounded-sm border border-gray-300 px-3 py-2 text-sm"
                placeholder="Details"
              />
            )}

            {isEditing ? (
              <div className="mt-4">
                <div className="text-xs font-semibold text-gray-600">
                  Activities (add-ons)
                </div>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {activities
                    .filter(
                      (a) =>
                        !day.locationId || a.destinationId === day.locationId,
                    )
                    .map((a) => {
                      const checked = day.activityIds.includes(a.id);
                      return (
                        <label
                          key={a.id}
                          className="flex items-start gap-3 rounded-sm border border-gray-200 px-3 py-2 text-sm text-gray-700"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={(e) => {
                              const nextIds = e.target.checked
                                ? [...day.activityIds, a.id]
                                : day.activityIds.filter((id) => id !== a.id);
                              updateDay(index, { activityIds: nextIds });
                            }}
                            className="mt-1"
                          />
                          <span className="min-w-0">
                            <span className="block font-medium text-gray-900">
                              {a.title}
                            </span>
                            <span className="block text-xs text-gray-600">
                              ${a.price}/person
                            </span>
                          </span>
                        </label>
                      );
                    })}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {isEditing ? (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={addDay}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#223441] hover:underline"
          >
            <Plus size={16} />
            Add day
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={saveEdits}
              disabled={!isDirty}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition disabled:opacity-50"
              style={{
                backgroundColor: "#223441",
                borderRadius: "2px",
                color: "#ffffff",
              }}
            >
              Save edits
            </button>
            <button
              type="button"
              onClick={revertEdits}
              disabled={!isDirty}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-gray-300 text-gray-900 hover:bg-gray-50 disabled:opacity-50"
              style={{ borderRadius: "2px" }}
            >
              Revert changes
            </button>
          </div>
        </div>
      ) : null}

      <p className="mt-4 text-xs text-gray-600">
        Editing is for planning only. Paste your custom itinerary into booking
        notes when you submit.
      </p>
    </div>
  );
}

function ProductDetails() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [_plan, setPlan] = useState(null);

  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    startDate: today,
    endDate: today,
    adults: 2,
    children: 0,
    infants: 0,
    fullName: "",
    email: "",
  });

  function updateField(name, value) {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  function onChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  const adultPrice = Number(product.priceFrom || 0);

  const childPrice = Number(product.childPriceFrom || adultPrice * 0.5);

  const infantPrice = Number(product.infantPriceFrom || 0);

  const adultsTotal = form.adults * adultPrice;

  const childrenTotal = form.children * childPrice;

  const infantsTotal = form.infants * infantPrice;

  const total = adultsTotal + childrenTotal + infantsTotal;

  if (!product) {
    return (
      <Layout>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-3xl font-semibold">Product not found</h1>
          <p className="mt-3 text-sm text-gray-600">
            The item you're looking for doesn't exist (or the link is wrong).
          </p>
          <Link to="/" className="mt-6 inline-block text-[#223441] underline">
            Go back home
          </Link>
        </div>
      </Layout>
    );
  }

  const galleryImages = product.gallery?.length
    ? product.gallery
    : [product.imageUrl].filter(Boolean);

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-3">
        <div className="grid gap-10 lg:grid-cols-[3fr_1.2fr]">
          <div>
            <Gallery images={galleryImages} />

            <h2 className="text-2xl mt-6 font-semibold">{product.title}</h2>
            <ExpandableText
              text={product.longDescription}
              lines={4}
              className="mt-3 text-sm text-gray-600"
              moreLabel="Show more details"
              lessLabel="Show less"
            />

            <div className="mt-5 text-2xl font-semibold text-gray-900">
              ${product.priceFrom}{" "}
              <span className="text-sm font-medium text-gray-600">
                / {product.priceUnit}
              </span>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
              {product.duration ? (
                <div className="flex items-center gap-2">
                  <Clock3 size={16} className="text-[#223441]" />
                  <span className="font-semibold text-gray-900">
                    Duration:
                  </span>{" "}
                  <span>{product.duration}</span>
                </div>
              ) : null}
              {product.route ? (
                <div>
                  <span className="font-semibold text-gray-900">Route:</span>{" "}
                  {product.route}
                </div>
              ) : null}
              {product.pickup ? (
                <div className="sm:col-span-2 flex items-center gap-2">
                  <MapPin size={16} className="text-[#223441]" />
                  <span className="font-semibold text-gray-900">
                    Pickup:
                  </span>{" "}
                  <span>{product.pickup}</span>
                </div>
              ) : null}
            </div>

            <List
              title="Highlights"
              items={product.highlights}
              icon={Sparkles}
            />
            <List title="Included" items={product.includes} icon={BadgeCheck} />
            <List title="Not included" items={product.excludes} icon={BadgeX} />

            {product.whatToKnow?.length ? (
              <div className="mt-10 rounded-sm border border-gray-300 bg-white p-6">
                <div className="flex items-center gap-2">
                  <Info size={18} className="text-[#223441]" />
                  <h2 className="text-md font-semibold">What to know</h2>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
                  {product.whatToKnow.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#223441]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {product.itineraryDays?.length ? (
              <ItineraryEditor
                itineraryDays={product.itineraryDays}
                onChangePlan={setPlan}
              />
            ) : null}
          </div>

          <aside className="h-fit rounded-sm border border-gray-300 bg-white p-6 lg:sticky lg:top-32">
            <h1 className="text-2xl font-semibold">Request on WhatsApp</h1>
            <div className="text-sm text-gray-600">
              We’ll confirm availability and send payment options.
            </div>

            {/* BOOKING FORM */}
            <form
              onSubmit={(event) => {
                event.preventDefault();

                const booking = {
                  id: `BK-${Date.now()}`,
                  createdAt: new Date().toISOString(),

                  productSlug: product.slug,
                  productTitle: product.title,

                  startDate: form.startDate,
                  endDate: form.endDate,

                  adults: form.adults,
                  children: form.children,
                  infants: form.infants,

                  pricing: {
                    total,
                  },

                  customer: {
                    fullName: form.fullName,
                    email: form.email,
                  },
                  paymentStatus: "WHATSAPP_PENDING",
                };

                saveLastBooking(booking);

                const text = [
                  `🆕 New Booking Request`,
                  `------------------------`,
                  `Product: ${product.title}`,

                  form.startDate && form.endDate
                    ? `Dates: ${form.startDate} → ${form.endDate}`
                    : null,

                  `Passengers:`,
                  form.adults ? `- Adults: ${form.adults}` : null,
                  form.children ? `- Children: ${form.children}` : null,
                  form.infants ? `- Infants: ${form.infants}` : null,

                  `------------------------`,
                  form.fullName ? `Name: ${form.fullName}` : null,
                  form.email ? `Email: ${form.email}` : null,

                  total > 0 ? `Estimated Total: $${total}` : null,
                ]
                  .filter(Boolean)
                  .join("\n");

                const whatsappLink = `${company.contact.whatsappLink}?text=${encodeURIComponent(text)}`;

                window.open(whatsappLink, "_blank");
              }}
              className="mt-4"
            >
              <div className="space-y-6 rounded-sm">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Participants
                  </h3>

                  <div className="space-y-3">
                    <Counter
                      label="Adults"
                      value={form.adults}
                      min={1}
                      onChange={(value) => updateField("adults", value)}
                    />

                    <Counter
                      label="Children"
                      value={form.children}
                      onChange={(value) => updateField("children", value)}
                    />

                    <Counter
                      label="Infants"
                      value={form.infants}
                      onChange={(value) => updateField("infants", value)}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Select Dates
                  </h3>

                  <DateRange
                    onChange={(item) => {
                      setDateRange([item.selection]);

                      setForm((current) => ({
                        ...current,
                        startDate: item.selection.startDate
                          .toISOString()
                          .split("T")[0],
                        endDate: item.selection.endDate
                          .toISOString()
                          .split("T")[0],
                      }));
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                    minDate={new Date()}
                    rangeColors={["#223441"]}
                    showDateDisplay={false}
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Enter Your Details
                  </h3>

                  <div className="space-y-3">
                    {/* NAME */}
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                      />

                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={onChange}
                        required
                        placeholder="Full Name"
                        className="w-full rounded-sm border border-gray-300 bg-gray-50 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#223441]"
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                      />

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        placeholder="Email Address"
                        className="w-full rounded-sm border border-gray-300 bg-gray-50 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#223441]"
                      />
                    </div>
                  </div>
                </div>

                {/* SUMMARY */}
                <div className="border-t border-gray-300 pt-2 space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span>Adults x {form.adults}</span>
                    <span className="font-semibold">
                      ${form.adults * Number(product.priceFrom || 0)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Children x {form.children}</span>
                    <span className="font-semibold">
                      $
                      {form.children *
                        Number(
                          product.childPriceFrom || product.priceFrom * 0.5,
                        )}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Infants x {form.infants}</span>
                    <span className="font-semibold">
                      ${form.infants * Number(product.infantPriceFrom || 0)}
                    </span>
                  </div>

                  <div className="border-t border-gray-300 pt-4 flex items-center justify-between">
                    <span className="text-base font-semibold text-gray-900">
                      Total
                    </span>

                    <span className="text-2xl font-bold text-[#223441]">
                      ${total}
                    </span>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{
                    backgroundColor: "#223441",
                    borderRadius: "2px",
                  }}
                >
                  Send on WhatsApp
                </button>
              </div>
            </form>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetails;
