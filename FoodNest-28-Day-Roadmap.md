# 🍽️ FoodNest — 28-Day Build & Learn Roadmap

**Goal:** Learn Node.js from scratch while building FoodNest, a real MERN-stack multi-tenant restaurant marketplace.

**How to use this doc each day:**
1. Read the "What you'll learn" section (5–10 min).
2. Copy the **Prompt** block for that day and paste it into your AI coding assistant (Rider AI, Copilot Chat, Claude Code, etc.) inside your project folder.
3. Actually type/review the code it gives you — don't just accept blindly. Ask it "explain this line" whenever something's unclear.
4. Test what you built before moving to the next day. If Day N doesn't run, don't start Day N+1.

**Structure:** Days 1–6 = Node.js foundations (mini exercises, not FoodNest yet). Days 7–28 = FoodNest itself, one feature at a time.

---

## PHASE 1: Node.js & Express Foundations (Days 1–6)

### Day 1 — Node.js basics: modules, npm, the event loop
**Learn:** What Node.js actually is, `require`/`module.exports`, running scripts, `npm init`, installing packages, `package.json`.

**Prompt:**
```
I'm brand new to Node.js. Set me up with a tiny practice project called
"node-basics". Walk me through:
1. Initializing it with npm init
2. Creating a couple of files that use module.exports and require to
   share code between them
3. A short explanation of what the Node.js event loop is and why
   Node is "non-blocking", with a runnable code example showing
   sync vs async behavior (e.g. setTimeout vs a blocking loop)
Explain each concept in plain English as you go, don't just give me code.
```

---

### Day 2 — Async JavaScript: callbacks, Promises, async/await
**Learn:** Why async matters in Node, converting callback code to Promises to async/await.

**Prompt:**
```
In my node-basics project, teach me async JavaScript for Node.js by
building 3 small examples:
1. A callback-based function that reads a fake "database" after a delay
2. The same thing rewritten using a Promise
3. The same thing rewritten using async/await with try/catch for errors
Explain why async/await is generally preferred, and what happens if I
forget to use "await" by mistake — show me that broken example too.
```

---

### Day 3 — Building your first Express server
**Learn:** What Express is, routes, middleware, request/response cycle.

**Prompt:**
```
Now teach me Express.js. In a new "express-basics" project, help me:
1. Install express and set up a basic server on port 5000
2. Create GET, POST, PUT, DELETE routes for an in-memory list of
   "notes" (no database yet, just an array)
3. Add a simple custom middleware function that logs every incoming
   request's method and URL
Explain what middleware actually is and how the request flows through
app.use() and route handlers step by step.
```

---

### Day 4 — MongoDB & Mongoose basics
**Learn:** NoSQL vs SQL, schemas, models, CRUD with Mongoose.

**Prompt:**
```
Teach me MongoDB with Mongoose in Node.js. Using my express-basics
project:
1. Help me install MongoDB locally (or set up a free MongoDB Atlas
   cluster if that's easier) and connect to it with Mongoose
2. Create a Mongoose schema and model for a "Note" (title, content,
   createdAt)
3. Rewrite my in-memory notes routes from Day 3 to actually read/write
   from MongoDB using the model
Explain what a Schema vs a Model is, and what happens under the hood
when I call .save(), .find(), .findById().
```

---

### Day 5 — Authentication basics: bcrypt & JWT
**Learn:** Password hashing, JWT tokens, protected routes.

**Prompt:**
```
Teach me authentication in Node.js/Express using my express-basics
project. Help me:
1. Add a User model with hashed passwords using bcrypt
2. Build register and login routes that issue a JWT on successful login
3. Build a middleware function that protects a route, requiring a
   valid JWT in the Authorization header
Explain WHY we hash passwords instead of storing them plain, and what's
actually inside a JWT (show me a decoded example).
```

---

### Day 6 — Clean architecture pattern (controllers/services/repositories)
**Learn:** Why FoodNest's structure (routes → controllers → services → repositories) exists and what each layer does.

**Prompt:**
```
I'm about to build a larger project using a layered architecture:
routes -> controllers -> services -> repositories -> MongoDB models.
Using my express-basics notes feature, refactor it into this structure
and explain, layer by layer, what belongs in each one and why we
don't just put everything in one file. Use plain language, like you're
teaching someone who has only been writing Node.js for 5 days.
```

---

## PHASE 2: FoodNest Project Setup & Core Backend (Days 7–12)

### Day 7 — Project scaffolding
**Learn:** Setting up the real FoodNest folder structure, environment variables, server entry point.

**Prompt:**
```
I'm starting my real project called FoodNest — a multi-tenant restaurant
marketplace (MERN stack). Here's the folder structure I want on the
backend:

server/
  src/
    config/
    routes/
    controllers/
    services/
    repositories/
    models/
    middlewares/
    validators/
    utils/
  app.js

Help me:
1. Scaffold this exact folder structure
2. Set up Express, dotenv, and a MongoDB connection using Mongoose
   inside config/
3. Create a .env file with PORT, MONGO_URI, JWT_SECRET placeholders
4. Get a "server is running" health-check route working at GET /api/health

Explain what each top-level folder is responsible for before you
generate anything.
```

---

### Day 8 — User model & role-based schema design
**Learn:** Designing schemas for multiple roles (Customer, Restaurant Owner, Super Admin) in one collection vs separate collections.

**Prompt:**
```
For FoodNest, I need a User model that supports 3 roles: customer,
restaurant_owner, and super_admin. Help me:
1. Design a single Mongoose User schema with a "role" field and only
   the fields relevant to each role (discuss whether to use one
   schema with optional fields, or discriminators — explain the
   tradeoff simply)
2. Add password hashing with bcrypt via a pre-save hook
3. Add a method on the schema to compare a plaintext password against
   the hash
Explain your schema design decision before writing the code.
```

---

### Day 9 — Register/Login + JWT auth for FoodNest
**Learn:** Applying Day 5's JWT knowledge to the real app, with role info embedded in the token.

**Prompt:**
```
Using the User model from yesterday, build FoodNest's real
authentication system following the routes -> controllers -> services
-> repositories pattern:
1. POST /api/auth/register (customer signup)
2. POST /api/auth/login (returns JWT containing userId and role)
3. A protect middleware that verifies the JWT and attaches the user
   to req.user
4. A restrictTo(...roles) middleware for role-based access control
Show me how restrictTo would be used to protect a route that only
super_admin should access.
```

---

### Day 10 — Restaurant model & multi-tenant design
**Learn:** How multi-tenancy works with a shared database (tenant isolation via ownerId/restaurantId).

**Prompt:**
```
Explain multi-tenant SaaS architecture to me simply, specifically the
"shared database with tenant isolation" approach FoodNest uses (every
restaurant's data lives in the same collections but is scoped by a
restaurantId/ownerId field).

Then help me build:
1. A Restaurant model (name, ownerId, address, location for geo
   queries, status: pending/approved/rejected, cuisine type, etc.)
2. POST /api/restaurants — a restaurant_owner can register a
   restaurant (status defaults to "pending")
3. GET /api/restaurants/mine — owner views their own restaurant(s)
Make sure every restaurant query is scoped to the logged-in owner
where appropriate, and explain how that scoping enforces tenant
isolation.
```

---

### Day 11 — Super Admin approval workflow
**Learn:** Admin-only routes, status transitions, guarding sensitive actions.

**Prompt:**
```
Build the restaurant approval workflow for FoodNest's Super Admin:
1. GET /api/admin/restaurants/pending — list restaurants awaiting
   approval
2. PATCH /api/admin/restaurants/:id/approve
3. PATCH /api/admin/restaurants/:id/reject
All three routes should be protected by both the "protect" and
"restrictTo('super_admin')" middleware from Day 9. Explain how these
two middlewares chain together in the route definition.
```

---

### Day 12 — Category & Menu models
**Learn:** Relational references in MongoDB (populate), nested resource design.

**Prompt:**
```
Build FoodNest's menu system:
1. A Category model (name, restaurantId)
2. A MenuItem model (name, price, description, image, categoryId,
   restaurantId, inventoryStatus: in_stock/out_of_stock)
3. Full CRUD routes for both, scoped so a restaurant_owner can only
   manage their OWN restaurant's categories/items (verify ownership
   in the service layer, not just the route)
Explain how Mongoose's .populate() works and show me an example
fetching a MenuItem with its Category name included.
```

---

## PHASE 3: Customer-Facing Features (Days 13–18)

### Day 13 — Browse restaurants, search & filters
**Learn:** Query params, filtering, sorting, pagination.

**Prompt:**
```
Build customer-facing restaurant discovery for FoodNest:
1. GET /api/restaurants — public list of approved restaurants, with
   query params for search (by name), sort (nearest/rating/popular),
   and pagination (page, limit)
2. GET /api/restaurants/:id — single restaurant with its categories
   and menu items populated
Explain how to build a dynamic Mongoose filter object from query
params safely (without allowing arbitrary injected fields).
```

---

### Day 14 — Smart food search across restaurants
**Learn:** Cross-collection search, MongoDB text indexes.

**Prompt:**
```
Build FoodNest's smart search: searching a food name like "Burger"
should return all restaurants offering an item matching that name,
sortable by nearest/lowest price/highest rated/most ordered.

1. Help me add a text index on MenuItem.name
2. Build GET /api/search?food=burger&sort=price that searches
   MenuItems, groups results by restaurant, and applies the sort
Explain what a MongoDB text index does and why we need it for this
kind of search instead of a plain regex.
```

---

### Day 15 — Cart & Order model
**Learn:** Designing an Order schema with embedded items, order lifecycle.

**Prompt:**
```
Build FoodNest's cart-to-order flow:
1. An Order model (customerId, restaurantId, items: [{menuItemId,
   quantity, price}], totalAmount, status: pending/confirmed/
   preparing/delivered/cancelled, paymentMethod, paymentStatus)
2. POST /api/orders — customer places an order from their cart
   (calculate totalAmount server-side from current menu prices, never
   trust prices sent from the frontend — explain why)
3. GET /api/orders/mine — customer's order history
4. GET /api/restaurants/:id/orders — restaurant owner views incoming
   orders for their restaurant only
```

---

### Day 16 — Order status management & restaurant order dashboard
**Learn:** State machines for order status, restricting valid transitions.

**Prompt:**
```
Add order status management to FoodNest:
1. PATCH /api/orders/:id/status — restaurant owner updates status
   (pending -> confirmed -> preparing -> delivered), and customer can
   cancel only while status is "pending"
2. Validate that status can only move forward in the defined sequence
   (e.g. can't go from "delivered" back to "pending")
Explain what a "state machine" is in simple terms and show me how to
enforce valid transitions with a small lookup object instead of a
long if/else chain.
```

---

### Day 17 — Reviews & ratings
**Learn:** One-to-many relationships, preventing duplicate/invalid reviews, aggregation for average rating.

**Prompt:**
```
Build a review system for FoodNest:
1. A Review model (customerId, restaurantId, orderId, rating 1-5,
   comment)
2. POST /api/restaurants/:id/reviews — only allow a customer to
   review a restaurant if they have a delivered order there, and only
   once per order
3. Use Mongoose aggregation to calculate and store the restaurant's
   average rating whenever a review is added
Explain what an aggregation pipeline is and walk through the stages
of the one you write.
```

---

### Day 18 — Favorites & recommendations
**Learn:** Simple recommendation logic (not ML — rule-based), array fields on User.

**Prompt:**
```
Add favorites and basic recommendations to FoodNest:
1. POST/DELETE /api/customers/favorites/:restaurantId — toggle a
   restaurant in the logged-in customer's favorites array
2. GET /api/recommendations — return a mix of: nearby restaurants
   (using coordinates), restaurants with active discounts, and the
   customer's most frequently ordered items (aggregate from their
   past orders)
Keep this rule-based, not machine learning — explain the logic for
each of the three recommendation types before coding it.
```

---

## PHASE 4: Group Ordering & Payments (Days 19–23)

### Day 19 — Group order creation & invite links
**Learn:** Generating shareable tokens, multi-user sessions on one resource.

**Prompt:**
```
Build FoodNest's group ordering feature, part 1:
1. A GroupOrder model (hostId, restaurantId, inviteCode, members:
   [{userId, items: [...], hasPaid}], status: open/locked/paid,
   paymentMode: host_pays/split_equally/self_pay)
2. POST /api/group-orders — host creates a group order and restaurant,
   generating a unique inviteCode
3. POST /api/group-orders/join/:inviteCode — a friend joins via the
   invite code and gets added to members
Explain how to generate a short unique invite code safely (avoiding
collisions).
```

---

### Day 20 — Adding items & locking the group order
**Learn:** Concurrent updates to a shared resource, locking state to prevent race conditions.

**Prompt:**
```
Continue the group order feature:
1. POST /api/group-orders/:id/items — a member adds items to their
   own portion of the group order (only allowed while status is
   "open")
2. PATCH /api/group-orders/:id/lock — only the host can lock the
   order, after which no more items can be added, moving status to
   "locked"
Explain the race condition risk if two members submit items at the
same instant, and how the "open"/"locked" status check protects
against it.
```

---

### Day 21 — Split payment logic
**Learn:** Calculating splits (equal vs self-pay), generating individual payment requests.

**Prompt:**
```
Build the payment splitting logic for FoodNest's group orders:
1. A function that, given a locked GroupOrder, calculates each
   member's amount owed based on paymentMode:
   - host_pays: host owes the full total, others owe 0
   - split_equally: total divided evenly among all members
   - self_pay: each member owes exactly the sum of their own items
2. POST /api/group-orders/:id/generate-payments — creates a Payment
   record per member with their calculated amountDue
Walk me through the self_pay calculation with a worked example using
numbers, before writing the code.
```

---

### Day 22 — Payment verification (manual/COD/online reference)
**Learn:** Manual payment proof workflows (common in markets without full payment gateway integration).

**Prompt:**
```
Build FoodNest's payment verification flow (no real payment gateway
yet — manual verification like EasyPaisa/JazzCash/bank transfer):
1. A Payment model (orderId or groupOrderId, payerId, amount, method,
   transactionRef, proofImageUrl (optional), status: pending/verified/
   rejected)
2. POST /api/payments/:id/submit — customer submits transaction
   reference and optional screenshot (use multer for the upload)
3. PATCH /api/payments/:id/verify — restaurant owner marks a payment
   verified or rejected
4. Business rule: an order only moves to "confirmed" once ALL required
   payments for it are verified
Explain how to check "all payments verified" for a group order before
flipping the order status.
```

---

### Day 23 — Discount & promotion management
**Learn:** Time-bound business rules, applying discounts at order time.

**Prompt:**
```
Build discount management for FoodNest:
1. A Discount model (restaurantId, category or specific items,
   percentage, startDate, endDate, isActive)
2. CRUD routes for restaurant owners to manage their discounts
3. When a customer places an order, automatically apply any active
   discount to matching items and store the discounted price on the
   order (not just the discount %, so historical orders don't change
   if the discount is later edited)
Explain why we store the calculated discounted price on the order
itself rather than just referencing the discount.
```

---

## PHASE 5: Dashboards, Frontend Integration & Polish (Days 24–28)

### Day 24 — Analytics aggregation for dashboards
**Learn:** MongoDB aggregation for reporting (revenue, order counts, popular items).

**Prompt:**
```
Build the backend data for FoodNest's three dashboards using
aggregation pipelines:
1. GET /api/restaurants/:id/dashboard — daily revenue, total orders,
   pending orders, top 5 popular menu items
2. GET /api/admin/dashboard — total restaurants, pending approvals,
   total customers, platform revenue, active orders
Walk me through building the revenue-by-day aggregation step by step,
explaining $match, $group, and $sort as we go.
```

---

### Day 25 — Connecting the React frontend: auth & routing
**Learn:** Axios setup, storing JWT, protected React routes, Redux Toolkit basics.

**Prompt:**
```
I now want to connect a React frontend to my FoodNest backend. Help me:
1. Set up a React app with React Router and Redux Toolkit
2. Create an authSlice for login/register/logout, storing the JWT
3. Build an axios instance that automatically attaches the JWT to
   every request
4. Build a ProtectedRoute component that redirects to /login if not
   authenticated, and can also restrict by role
Explain how Redux Toolkit's createSlice reduces boilerplate compared
to plain Redux.
```

---

### Day 26 — Frontend: restaurant browsing & menu pages
**Learn:** Fetching and displaying data, component structure, Material UI basics.

**Prompt:**
```
Build the customer-facing React pages for FoodNest:
1. A RestaurantList page that fetches and displays approved
   restaurants with search and sort controls
2. A RestaurantDetail page showing the menu grouped by category,
   with "add to cart" buttons
3. A simple cart page using Redux state
Use Material UI components and keep the structure clean: pages/,
components/, services/ (for API calls), redux/.
```

---

### Day 27 — Frontend: restaurant owner & admin dashboards
**Learn:** Role-conditional UI, tables, forms for CRUD.

**Prompt:**
```
Build the restaurant owner and admin dashboard pages in React for
FoodNest:
1. Restaurant owner: menu management (CRUD forms/tables), incoming
   orders list with status update buttons, simple revenue chart
2. Admin: pending restaurant approvals list with approve/reject
   buttons, platform stats overview
Explain how you're deciding what to fetch on page load vs on user
action, and how loading/error states are handled.
```

---

### Day 28 — End-to-end testing, cleanup & deployment prep
**Learn:** Manual QA pass, environment config for production, basic deployment.

**Prompt:**
```
Help me do a final pass on FoodNest before considering it "done" for
this learning project:
1. Walk through a checklist to manually test the full flow: register
   -> restaurant owner creates restaurant -> admin approves -> owner
   adds menu -> customer orders -> group order -> payment ->
   restaurant confirms -> review
2. Review my code for obvious security gaps (exposed secrets, missing
   auth checks, unvalidated input)
3. Help me prepare environment variables and a basic deployment guide
   (e.g. backend on Render/Railway, frontend on Vercel/Netlify,
   MongoDB Atlas for the database)
Point out anything in my current code that looks risky before we
deploy.
```

---

## 📌 Tips for the whole month

- **Don't skip the "explain" parts of prompts.** The value of this roadmap is understanding, not just working code — if the AI's explanation is too fast, follow up with "explain that like I'm a complete beginner."
- **If a day's prompt fails or errors out**, paste the exact error back to your AI assistant before moving on. Debugging real errors is where most of the learning happens.
- **Keep a running notes file** (e.g. `LEARNING_LOG.md`) where each day you write 2–3 sentences in your own words about what you built. This cements the concept far better than just running working code.
- **It's fine to take more than 28 days.** If a day feels rushed, split it across two. The roadmap is a guide, not a deadline.
- Once you're comfortable, revisit the **Future Enhancements** list in your README (real-time tracking, push notifications, payment gateway integration) as stretch goals after Day 28.

Good luck — this is a genuinely solid FYP scope. 🍽️
