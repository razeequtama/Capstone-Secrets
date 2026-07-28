import { view_secret } from "../model/addSecretModel.js";

//COOKIE IMPLEMENTATION 3: DASHBOARD CONTROLLER
export async function renderDashboardPage(req, res)
{
  if (req.isAuthenticated()) {
    try {
      const secrets_on_page = await view_secret(req.user.user_id);

      res.render("secrets", {
        user: req.user,
        secrets_on_page,
      });
    } catch (error) {
      console.error(error);
      res.status(500).render("secrets", {
        user: req.user,
        error: "Could not load secrets.",
      });
    }
  } else {
    res.redirect("/login");
  }
}