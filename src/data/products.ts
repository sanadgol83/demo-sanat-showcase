import triblock from "@/assets/p-triblock.jpg";
import shrink from "@/assets/p-shrink.jpg";
import label from "@/assets/p-label.jpg";
import unscrambler from "@/assets/p-unscrambler.jpg";
import pasteurizer from "@/assets/p-pasteurizer.jpg";
import depalletizer from "@/assets/p-depalletizer.jpg";

export type Product = {
  id: string;
  name: string;
  model: string;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "triblock",
    name: "دستگاه تری‌بلوک",
    model: "TB-Series",
    description:
      "ماشین تمام اتوماتیک شست‌وشو، پرکنی و درب‌بندی مناسب انواع بطری در یک شاسی یکپارچه.",
    image: triblock,
  },
  {
    id: "shrink",
    name: "دستگاه شرینک پک",
    model: "SH-Series",
    description:
      "تونل حرارتی و سیستم شرینک با دقت بالا برای بسته‌بندی نهایی قوطی و بطری.",
    image: shrink,
  },
  {
    id: "label",
    name: "دستگاه لیبل زن",
    model: "LB-Series",
    description:
      "سیستم لیبل‌زنی پیشرفته با قابلیت تنظیم سریع برای انواع ظروف و بسته‌ها.",
    image: label,
  },
  {
    id: "unscrambler",
    name: "دستگاه ردیف کن بطری",
    model: "UN-Series",
    description:
      "تغذیه، جهت‌دهی و ردیف کردن اتوماتیک بطری‌ها در ابتدای خط بسته‌بندی.",
    image: unscrambler,
  },
  {
    id: "pasteurizer",
    name: "پاستوریزاتور تونلی",
    model: "PT-Series",
    description:
      "سیستم پاستوریزاسیون تونلی با کنترل دقیق دما جهت تضمین ماندگاری محصول.",
    image: pasteurizer,
  },
  {
    id: "depalletizer",
    name: "دیپالتایزر",
    model: "DP-Series",
    description:
      "تخلیه اتوماتیک پالت و تغذیه پیوسته خط تولید بدون توقف و با ایمنی بالا.",
    image: depalletizer,
  },
];
