import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  Lock, LogOut, RefreshCw, Inbox, BellDot, Phone, Mail, Loader2,
} from "lucide-react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { IMAGES } from "@/lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const TOKEN_KEY = "limo_admin_token";
const STATUSES = ["new", "contacted", "confirmed", "completed", "cancelled"];

const statusColor = {
  new: "bg-[#C9A227]/15 text-[#8A6508] border-[#C9A227]/40",
  contacted: "bg-blue-500/15 text-blue-700 border-blue-500/30",
  confirmed: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
  completed: "bg-neutral-500/15 text-neutral-700 border-neutral-500/30",
  cancelled: "bg-red-500/15 text-red-700 border-red-500/30",
};

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY) || "");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({ total: 0, new: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Admin Dashboard | 92 Limo Service";
  }, []);

  const auth = { headers: { Authorization: `Bearer ${token}` } };

  const load = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const [b, s] = await Promise.all([
        axios.get(`${API}/admin/bookings`, { headers: { Authorization: `Bearer ${token}` } }),
        axios.get(`${API}/admin/stats`, { headers: { Authorization: `Bearer ${token}` } }),
      ]);
      setBookings(b.data);
      setStats(s.data);
    } catch (err) {
      if (err?.response?.status === 401) {
        localStorage.removeItem(TOKEN_KEY);
        setToken("");
        toast.error("Session expired. Please log in again.");
      } else {
        toast.error("Failed to load bookings.");
      }
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => { load(); }, [load]);

  const login = async (e) => {
    e.preventDefault();
    setLoggingIn(true);
    try {
      const res = await axios.post(`${API}/admin/login`, { password });
      localStorage.setItem(TOKEN_KEY, res.data.token);
      setToken(res.data.token);
      setPassword("");
      toast.success("Welcome back.");
    } catch {
      toast.error("Invalid password.");
    } finally {
      setLoggingIn(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken("");
    setBookings([]);
  };

  const changeStatus = async (id, status) => {
    try {
      await axios.patch(`${API}/admin/bookings/${id}?status=${status}`, {}, auth);
      setBookings((bs) => bs.map((b) => (b.inquiry_id === id ? { ...b, status } : b)));
      toast.success("Status updated.");
    } catch {
      toast.error("Update failed.");
    }
  };

  const fieldCls = "bg-white border-black/15 text-[#0A0A0A] focus-visible:ring-[#C9A227]";

  if (!token) {
    return (
      <div className="min-h-screen bg-[#F6F5F2] flex items-center justify-center px-6">
        <form
          data-testid="admin-login-form"
          onSubmit={login}
          className="w-full max-w-sm bg-white border border-black/10 rounded-2xl p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <img src={IMAGES.logo} alt="92 Limo Service logo" className="h-12 w-auto" />
            <div>
              <div className="text-lg font-display font-bold text-[#0A0A0A]">Admin</div>
              <div className="text-xs text-neutral-500">Booking inquiries dashboard</div>
            </div>
          </div>
          <label className="text-sm text-neutral-700">Password</label>
          <Input
            data-testid="admin-password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className={`mt-2 ${fieldCls}`}
          />
          <button
            data-testid="admin-login-btn"
            type="submit"
            disabled={loggingIn}
            className="mt-5 w-full gold-gradient text-[#0A0A0A] font-bold py-3 rounded-full hover:brightness-105 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loggingIn ? <Loader2 size={17} className="animate-spin" /> : <Lock size={16} />}
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F5F2] text-[#0A0A0A]">
      <header className="border-b border-black/10 glass sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={IMAGES.logo} alt="92 Limo Service logo" className="h-10 w-auto" />
            <span className="text-sm font-normal text-neutral-500">Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              data-testid="admin-refresh-btn"
              onClick={load}
              className="flex items-center gap-2 text-sm text-neutral-700 hover:text-[#B8860B] transition-colors"
            >
              <RefreshCw size={15} className={loading ? "animate-spin" : ""} /> Refresh
            </button>
            <button
              data-testid="admin-logout-btn"
              onClick={logout}
              className="flex items-center gap-2 text-sm text-neutral-700 hover:text-red-500 transition-colors"
            >
              <LogOut size={15} /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <div data-testid="stat-total" className="bg-white border border-black/10 rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-2 text-neutral-500 text-sm"><Inbox size={16} /> Total Inquiries</div>
            <div className="mt-2 text-3xl font-display font-bold tabnums">{stats.total}</div>
          </div>
          <div data-testid="stat-new" className="bg-white border border-black/10 rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-2 text-neutral-500 text-sm"><BellDot size={16} className="text-[#B8860B]" /> New</div>
            <div className="mt-2 text-3xl font-display font-bold tabnums gold-text">{stats.new}</div>
          </div>
        </div>

        <div className="bg-white border border-black/10 rounded-xl overflow-hidden shadow-sm">
          <div className="px-5 py-4 border-b border-black/10 font-display font-semibold">Booking Inquiries</div>
          {loading ? (
            <div className="p-10 text-center text-neutral-500"><Loader2 className="animate-spin mx-auto" /></div>
          ) : bookings.length === 0 ? (
            <div data-testid="admin-empty" className="p-12 text-center text-neutral-500">No inquiries yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <Table data-testid="admin-bookings-table">
                <TableHeader>
                  <TableRow className="border-black/10 hover:bg-transparent">
                    <TableHead className="text-neutral-500">Client</TableHead>
                    <TableHead className="text-neutral-500">Trip</TableHead>
                    <TableHead className="text-neutral-500">When</TableHead>
                    <TableHead className="text-neutral-500">Service / Vehicle</TableHead>
                    <TableHead className="text-neutral-500">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((b) => (
                    <TableRow key={b.inquiry_id} data-testid={`booking-row-${b.inquiry_id}`} className="border-black/10">
                      <TableCell>
                        <div className="font-semibold text-[#0A0A0A]">{b.name}</div>
                        <a href={`tel:${b.phone}`} className="flex items-center gap-1 text-xs text-neutral-500 hover:text-[#B8860B]"><Phone size={11} /> {b.phone}</a>
                        <a href={`mailto:${b.email}`} className="flex items-center gap-1 text-xs text-neutral-500 hover:text-[#B8860B]"><Mail size={11} /> {b.email}</a>
                      </TableCell>
                      <TableCell className="text-sm text-neutral-700 max-w-[220px]">
                        <div><span className="text-neutral-400">From:</span> {b.pickup_location}</div>
                        <div><span className="text-neutral-400">To:</span> {b.dropoff_location}</div>
                        {b.notes ? <div className="mt-1 text-xs text-neutral-400 italic">"{b.notes}"</div> : null}
                      </TableCell>
                      <TableCell className="text-sm text-neutral-700 tabnums whitespace-nowrap">
                        {b.date}<br />{b.time}
                        <div className="text-xs text-neutral-400">{b.passengers}p · {b.luggage} bags</div>
                      </TableCell>
                      <TableCell className="text-sm text-neutral-700">
                        <div>{b.service_type}</div>
                        <div className="text-xs text-neutral-400">{b.vehicle_type}</div>
                      </TableCell>
                      <TableCell>
                        <Badge className={`mb-2 capitalize border ${statusColor[b.status] || statusColor.new}`}>{b.status}</Badge>
                        <Select value={b.status} onValueChange={(v) => changeStatus(b.inquiry_id, v)}>
                          <SelectTrigger data-testid={`status-select-${b.inquiry_id}`} className="h-8 text-xs bg-white border-black/15 w-[130px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-black/10 text-[#0A0A0A]">
                            {STATUSES.map((s) => (
                              <SelectItem key={s} value={s} className="capitalize text-xs focus:bg-[#C9A227]/15 focus:text-[#0A0A0A]">{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
