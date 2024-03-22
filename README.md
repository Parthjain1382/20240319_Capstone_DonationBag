<h3>Project Name</h3>: Donation Bag
<h3>Overview</h3>:
Donation Bag is a web application aimed at facilitating the process of donating essential items such as beds and clothes to orphanages. The platform serves as a bridge between donors who want to contribute items and orphanages that are in need of them. It allows donors to submit donations and track their contributions, while orphanages can specify their needs and manage incoming donations.

**Key Features:**

1. **User Authentication:** Users can sign up and log in to their accounts securely. Authentication is implemented using JWT tokens for user sessions.

2. **Donation Submission:** Donors can submit donations through the platform by specifying the quantity of items they wish to donate, including beds, men's clothes, and women's clothes.

3. **Inventory Management:** The application manages an inventory of donated items, tracking the quantity of each item available for distribution. This inventory ensures transparency and accountability in the donation process.

4. **Orphanage Needs:** Orphanages can list their current needs, including the number of beds and clothes required for male and female residents. This information helps donors understand where their contributions are most needed.

5. **Donation Tracking:** Donors can track the status of their donations, including whether they have been received by the orphanage and how they have been utilized.

6. **Admin Panel:** Admins have access to an admin panel where they can manage user accounts, view donation statistics, and oversee the overall operation of the platform.

**Schema Overview:**

- **Users Schema:** Stores user information such as username, email, password hash, phone number, address, and additional details for organizational users (e.g., company name, company email).
- **Donations Schema:** Records each donation made by users, including the orphanage ID, donor ID, donated items (beds, men's clothes, women's clothes), and donation date.
- **Orphanages Schema:** Stores information about orphanages, including their name, location, contact details, and the current needs for beds and clothes for male and female residents.
- **Inventory Schema:** Tracks the inventory of donated items, including the donor ID, quantity of beds, men's clothes, and women's clothes available for distribution.

**Project Goals:**
The primary goal of Donation Bag is to streamline the donation process, ensuring that essential items reach orphanages efficiently and effectively. By providing a user-friendly platform for both donors and orphanages, the project aims to encourage greater community involvement in supporting vulnerable populations.

Overall, Donation Bag aims to make a positive impact by facilitating charitable contributions and meeting the needs of orphanages in a transparent and organized manner.
