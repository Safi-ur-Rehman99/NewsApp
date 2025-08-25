# 📰 DailyPulse - Modern News Application

> **Stay informed with the latest news from around the world, beautifully designed and intelligently categorized**

DailyPulse is a responsive, modern news application built with React that delivers the latest headlines from multiple categories and countries. Powered by NewsData.io API, it provides real-time news updates with an elegant user interface and smooth infinite scrolling experience.

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple.svg)](https://getbootstrap.com/)
[![NewsData.io](https://img.shields.io/badge/NewsData.io-API-green.svg)](https://newsdata.io/)
[![React Router](https://img.shields.io/badge/React_Router-7.8.0-red.svg)](https://reactrouter.com/)

![DailyPulse Preview](https://github.com/user-attachments/assets/db98a06e-97cc-4322-bca6-d59a520a6099)



---

## ✨ Features Overview


### 🌍 **Multi-Category News**
- **General, Business, Entertainment, Health, Science, Sports, Technology, Crypto**
- Dynamic category switching with smooth loading transitions
- Category-specific headlines and trending topics

### 🗺️ **Country-Based Filtering**
- **16+ Countries Supported**: US, UK, Pakistan, Canada, Australia, India, Germany, France, Japan, Brazil, Mexico, China, Russia, UAE, Singapore, and more
- Real-time country switching without page reload
- Localized news content for better relevance

### 🔄 **Advanced User Experience**
- **Infinite Scroll**: Seamless content loading as you browse
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Loading States**: Beautiful loading animations and progress bars
- **Error Handling**: Graceful fallbacks for API issues

### 🎨 **Modern UI/UX**
- **Futuristic Minimalist Design**: Clean, gradient-based color scheme
- **Smooth Animations**: Hover effects and transitions
- **Card-Based Layout**: Easy-to-scan news cards with images
- **Accessibility**: Screen reader friendly and keyboard navigation support

---

## 🚀 Quick Start Guide

### **Prerequisites**
```bash
Node.js 16.x or higher
npm or yarn package manager
NewsData.io API Key (Free tier available)
```

### **Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/dailypulse-news-app.git
   cd dailypulse-news-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Get Your NewsData.io API Key**
   
   **Step-by-step API Setup:**
   - Visit [NewsData.io](https://newsdata.io/)
   - Click "Get API Key" and sign up for a free account
   - Verify your email and log in to your dashboard
   - Copy your API key from the dashboard
   - Free tier provides: **200 requests/day** with **10 articles per request**

4. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_NEWS_API_KEY=your_newsdata_io_api_key_here
   ```
   
   **⚠️ Important Notes:**
   - The `REACT_APP_` prefix is **mandatory** for React environment variables
   - If you use a different variable name (e.g., `REACT_APP_MY_NEWS_KEY`), update `App.js`:
     ```javascript
     const apiKey = process.env.REACT_APP_MY_NEWS_KEY; // Change this line
     ```
   - Never commit your `.env` file to version control (it's already in .gitignore)

5. **Start Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```

6. **Open Your Browser**
   Navigate to `http://localhost:3000`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── New.js              # Main news component with infinite scroll
│   ├── NewsItem.js         # Individual news card component  
│   ├── Navbar.js           # Navigation with country/category filters
│   ├── Spinner.js          # Loading animation component
│   └── loading.gif         # Loading spinner asset
├── App.js                  # Main app with routing configuration
├── App.css                 # Modern styling and theme variables
├── index.js                # React app entry point
└── index.css               # Base styles
```

---

## 🔧 Configuration & Customization

### **API Configuration**
The app uses NewsData.io API with the following endpoints:
- **Regular News**: `https://newsdata.io/api/1/latest`
- **Crypto News**: `https://newsdata.io/api/1/crypto`

### **Customizable Settings** (in `App.js`):
```javascript
const pageSize = 10;  // Articles per page (max 50 on paid plans)
```

### **Adding New Categories**
To add new categories, update the navigation in `Navbar.js`:
```javascript
<li className="nav-item">
  <Link className="nav-link" to="/yourcategory">Your Category</Link>
</li>
```

And add the route in `App.js`:
```javascript
<Route path='/yourcategory' element={<New category="yourcategory" />} />
```

### **Adding New Countries**
Update the countries array in `Navbar.js`:
```javascript
{ code: 'countrycode', name: 'Country Name' },
```

---

## 🎨 Design System

### **Color Palette**
- **Primary Green**: `#10b981` - Trust and reliability
- **Secondary Green**: `#059669` - Depth and emphasis  
- **Accent Orange**: `#f59e0b` - Energy and highlights
- **Dark Background**: `#1f2937` - Professional contrast
- **Light Gray**: `#f3f4f6` - Clean backgrounds

### **Typography**
- **System Fonts**: Segoe UI, Tahoma, Geneva, Verdana
- **Responsive Sizing**: Scales from mobile to desktop
- **Font Weights**: 400-700 for hierarchy

---

## 📱 Responsive Breakpoints

- **Mobile**: `< 576px`
- **Tablet**: `576px - 768px`  
- **Desktop**: `> 768px`
- **Large Desktop**: `> 992px`

---

## 🛠️ Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production  
npm test           # Run test suite
npm run eject      # Eject from Create React App (irreversible)
```

---

## 🚀 Deployment

**Quick Deploy Options:**
- **Vercel**: `npm i -g vercel && vercel --prod`
- **Netlify**: Drag & drop the `build` folder after `npm run build`

Make sure to add your environment variables in the hosting platform's dashboard.

---

## ⚡ Performance & Optimization

### **Current Optimizations**
- Code splitting with React Router
- Image lazy loading and error fallbacks
- Efficient infinite scroll implementation
- Minimal re-renders with proper key props

### **API Usage Optimization**
- **Free Tier**: 200 requests/day, 10 articles each = 2,000 articles daily
- **Paid Tier**: Up to 50 articles per request for better infinite scroll experience
- Smart caching and request throttling implemented

---

## 🐛 Troubleshooting

### **Common Issues**

1. **"No articles found"**
   - Check your API key in `.env`
   - Verify NewsData.io account status
   - Try different category/country combinations

2. **Images not loading**
   - Add a default image to `public/images/default-news-image.png`
   - Or the app will show a placeholder

3. **API Rate Limit Exceeded**
   - Wait for the daily reset (midnight UTC)
   - Consider upgrading to a paid plan
   - Implement request caching for development

4. **Infinite scroll not working**
   - Check browser console for API errors
 

**Happy coding ❤️**
