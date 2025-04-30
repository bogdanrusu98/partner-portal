## Project Overview

PartnerPortal is a single-page Angular application designed to display and manage partner data in a clear and responsive interface.

Key features include:

- API integration for partner data
- Responsive design with Tailwind CSS
- Custom date range picker (Moment + Angular Material)
- Gradient-styled buttons matching Figma design
- Pagination and formatted table display
- Modal-based error feedback for unimplemented actions

Challenges:

- Deploying to Vercel with dynamic environment variables
- Styling Angular Material Datepicker to match Figma
- Ensuring consistent gradients across screen sizes

## Technologies Used

- Angular v19.2.9
- Angular Material (Datepicker, Dialog)
- Moment.js (date formatting)
- Tailwind CSS (styling)
- TypeScript
- Vercel (hosting)
- GitHub (version control)

## Error Handling

All API interactions are wrapped in `catchError` from `rxjs` to handle network or server-side failures.  
Additionally, all interactive actions that are not yet implemented trigger a modal error dialog using Angular Material's `MatDialog`, providing consistent user feedback.

## Environment Setup

This project uses environment-specific API URLs. The `src/environments/environment.ts` and `.prod.ts` files are **not included in Git**.

To run locally, copy the sample file:

```bash
cp src/environments/environment.sample.ts src/environments/environment.ts
