import requests

items = ['assets/fonts/Poppins-SemiBold.woff2',
'assets/fonts/Poppins-ExtraBold.woff2',
'assets/fonts/Poppins-Medium.woff2',
'assets/fonts/Poppins-Regular.woff',
'assets/fonts/Poppins-SemiBold.woff',
'assets/fonts/Poppins-ExtraBold.woff',
'assets/fonts/Poppins-Medium.woff',
'assets/fonts/Poppins-Regular.ttf',
'assets/fonts/Poppins-SemiBold.ttf',
'assets/fonts/Poppins-ExtraBold.ttf',
'assets/fonts/Poppins-Medium.ttf',
'assets/fonts/Poppins-Bold.woff2',
'assets/fonts/Poppins-Bold.woff',
'assets/fonts/Poppins-Bold.ttf',
]

for item in items:
	url = 'https://digipe.com/{}'.format(item)
	r = requests.get(url, allow_redirects=True)

	open(item, 'wb').write(r.content)