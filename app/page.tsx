import { Button, Card, CardContent, Typography } from "@mui/material";

export default function DashboardPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 mb-8 shadow-2xl text-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Your Dashboard</h1>
        <p className="text-lg text-white/80 mb-6">Manage your projects, articles, and profile with style.</p>
        <Button variant="contained" color="secondary" className="mt-6">Get Started</Button>
      </section>

      <section className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
        {["Articles", "Profile", "Security"].map((title, idx) => (
          <Card key={idx} className="bg-white/10 backdrop-blur-md rounded-3xl p-4">
            <CardContent className="text-center">
              <Typography variant="h6" className="text-white font-bold">{title}</Typography>
              {/* Збільшений відступ mt-6 для кращого вигляду */}
              <Button variant="contained" color="secondary" className="mt-6 w-full">
                {title === "Articles" ? "Go" : title === "Profile" ? "Edit" : "Secure"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}