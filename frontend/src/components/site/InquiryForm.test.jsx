/**
 * Regression test: the unified form must render even when Stripe isn't
 * configured (publishable-key probe 503s) — guards the useStripe-outside-
 * Elements crash class.
 */
import { render, screen, waitFor } from "@testing-library/react";
import { InquiryForm } from "./InquiryForm";

beforeAll(() => {
  window.IntersectionObserver =
    window.IntersectionObserver ||
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  window.matchMedia =
    window.matchMedia ||
    (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));
  Element.prototype.scrollIntoView = Element.prototype.scrollIntoView || (() => {});
});

beforeEach(() => {
  global.fetch = jest.fn((url) => {
    if (String(url).includes("create-payment-intent")) {
      return Promise.resolve({
        ok: false,
        status: 503,
        json: () => Promise.resolve({ success: false, message: "Payments not configured" }),
      });
    }
    return Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve({ success: true }) });
  });
});

test("renders the unified form when payments are not configured", async () => {
  render(<InquiryForm />);
  await waitFor(() => expect(screen.getByTestId("inquiry-form")).toBeTruthy());
  expect(screen.getByTestId("inquiry-vehicle-business-sedan")).toBeTruthy();
  expect(screen.getByTestId("inquiry-quote-panel")).toBeTruthy();
  expect(screen.getByTestId("inquiry-service-airport-transfer")).toBeTruthy();
  expect(screen.getByTestId("inquiry-sms-consent")).toBeTruthy();
  expect(screen.getByTestId("inquiry-submit").textContent).toContain("Request Booking");
  expect(
    screen.getByText(/We respond within 15 minutes\. We never share your info\./)
  ).toBeTruthy();
});
