// server/api/services.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apiKey = config.public.googleApiKey;
  const sheetId = config.public.sheetId;
  const sheetName = "TDSheet";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`;

  try {
    const response: any = await $fetch(url);

    if (!response.values || response.values.length <= 1) {
      return [];
    }

    // Трансформуємо масив масивів у масив об'єктів
    return response.values.slice(1).map((row: any) => ({
      title: row[0] || "",
      icon: row[1] || "i-lucide-dog",
      shortDesc: row[2] || "",
      content: {
        subheading: row[3] || "",
        // Розбиваємо список по ";" якщо він є
        list: row[4] ? row[4].split(";").map((i: string) => i.trim()) : [],
        footer: row[5] || "",
      },
      price: row[6] || null,
    }));
  } catch (error: any) {
    console.error("Sheet API Error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Помилка завантаження даних з Google Таблиць",
    });
  }
});
