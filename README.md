# Char's Hotdogs & Hamburgers Website
This is the official website for char's hotdogs and hamburgers built by [Jacob Hanson-Regalado (@jhanreg11)](https://github.com/jhanreg11)
using React & deployed on github pages.

# Instructions for Site Content Updates
To avoid paying a monthly fee for a usable server, this site has been set up to change the data for the menu, announcements, and hours from github. 
Below are exact instructions on how to do all of those. You must logged in as the owner or a contributor of the website
 to do the following.
 
Each file will have this general format:
```json
[
  {
    "key": "value",
    "key2": "value2"
  },
  {
    "key": "value",
    "key2": "value2" 
  }
...
]
```
The above block shows two generic items, each item is surrounded by { and }. Inside of items, data is stored by providing a name 
in quotations (such as "key") followed by a colon and then the actual data in quotations (such as "value").

It is very important that you follow these general rules:
 * do not delete the [ and the ]  at the beginning/end of the files.
 * whenever you add a new item, surround it with { and }.
 * Make sure that inside of an item, each line besides the last has a comma (,) at the end.
 * Make sure that there is a comma between each item.
 * Make sure that each key/value pair in an item has a colon in the middle.
 * When deleting an item, make sure to remove any extra commas.
 * When adding an item, make sure to place a new comma before/after it.
 * Make sure that items in each file are in the order that you want to be displayed on the site.
 
### Update announcements
1. Open [src/data/announcements.json](https://github.com/Charshotdogs/chars-website/blob/master/src/data/announcements.json).
2. Click the pencil symbol on the top right part of the page to begin editing.
3. To add a new announcement, use the following format:
    ```json
    {
    "content": "<announcement-body>"
    }
    ```
    Whatever you type in instead of <announcement-body> will be displayed exactly, so make sure that there are no typos.
    Each announcement is displayed in the order that they exist in this file as well.
4. Make sure that you followed all of the general rules that I listed above.
5. Click the green button at the bottom of the page that says "commit changes".
6. Wait  ~3 minutes and check the website to make sure that your changes showed up correctly.

### Update menu
1. Open [src/data/menu.json](https://github.com/Charshotdogs/chars-website/blob/master/src/data/menu.json)
2. Click the pencil symbol on the top right part of the page to begin editing.
3. To add a new menu item, use the following format
    ```json
    {
       "category": "<category-name>",
       "name": "<item-name>",
       "desc": "<item-desc>",
       "price": "<item-price>"
    }
    ```
    Here is a description of each key's meaning/rules:
    * category: the category this item belongs to. must be either "hotdog", "hamburger", "sandwich", or "side". drinks belong to the "side" category.
    * name: the items name, this can be any value.
    * desc: description of what comes on the  item. This is optional.
    * price: the items price. Make sure it follows the format "$X.XX" or "$X.XX/$X.XX" if half-prices are an option.
4. Make sure that you followed all of the general rules that I listed above.
5. Click the green button at the bottom of the page that says "commit changes".
6. Wait  ~3 minutes and check the website to make sure that your changes showed up correctly.

### Update Hours
1. Open [src/data/hours.json](https://github.com/Charshotdogs/chars-website/blob/master/src/data/hours.json)
2.  Click the pencil symbol on the top right part of the page to begin editing. 
3. To add a new item, use the following format
    ```json
    {
      "day": "<day-value>",
      "open": "<open-time>",
      "close": "<close-time",
      "closed": <true/false>
    }
    ```
    item structure:
    * day: The day/days for this set of hours. Tt can be any value, so if 
    you want to do multiple days in one you can do something like "SUN-MON" or "SUN, MON, TUES". Whatever you type will be displayed exactly on the site.
    * open: the opening time. Whatever you type is exactly displayed on the site.
    * close: the closing time, Whatever you type is exactly displayed on the site.
    * closed: Whether your closed on this day. This is optional, it has to be either true or false WITHOUT QUOTATIONS. If you set the to true, you do not need to provide the open or close key/value pairs.
4. Make sure that you followed all of the general rules that I listed above, and that if you set a day as closed, it is either true or false WITH NO QUOTES.
5. Click the green button at the bottom of the page that says "commit changes".
6. Wait  ~3 minutes and check the website to make sure that your changes showed up correctly.