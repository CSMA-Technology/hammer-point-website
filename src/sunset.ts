import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const sunset: CustomThemeConfig = {
	name: 'sunset',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #50b0c3
		'--color-primary-50': '229 243 246', // #e5f3f6
		'--color-primary-100': '220 239 243', // #dceff3
		'--color-primary-200': '211 235 240', // #d3ebf0
		'--color-primary-300': '185 223 231', // #b9dfe7
		'--color-primary-400': '133 200 213', // #85c8d5
		'--color-primary-500': '80 176 195', // #50b0c3
		'--color-primary-600': '72 158 176', // #489eb0
		'--color-primary-700': '60 132 146', // #3c8492
		'--color-primary-800': '48 106 117', // #306a75
		'--color-primary-900': '39 86 96', // #275660
		// secondary | #92da93
		'--color-secondary-50': '239 249 239', // #eff9ef
		'--color-secondary-100': '233 248 233', // #e9f8e9
		'--color-secondary-200': '228 246 228', // #e4f6e4
		'--color-secondary-300': '211 240 212', // #d3f0d4
		'--color-secondary-400': '179 229 179', // #b3e5b3
		'--color-secondary-500': '146 218 147', // #92da93
		'--color-secondary-600': '131 196 132', // #83c484
		'--color-secondary-700': '110 164 110', // #6ea46e
		'--color-secondary-800': '88 131 88', // #588358
		'--color-secondary-900': '72 107 72', // #486b48
		// tertiary | #040622
		'--color-tertiary-50': '217 218 222', // #d9dade
		'--color-tertiary-100': '205 205 211', // #cdcdd3
		'--color-tertiary-200': '192 193 200', // #c0c1c8
		'--color-tertiary-300': '155 155 167', // #9b9ba7
		'--color-tertiary-400': '79 81 100', // #4f5164
		'--color-tertiary-500': '4 6 34', // #040622
		'--color-tertiary-600': '4 5 31', // #04051f
		'--color-tertiary-700': '3 5 26', // #03051a
		'--color-tertiary-800': '2 4 20', // #020414
		'--color-tertiary-900': '2 3 17', // #020311
		// success | #86bc7b
		'--color-success-50': '237 245 235', // #edf5eb
		'--color-success-100': '231 242 229', // #e7f2e5
		'--color-success-200': '225 238 222', // #e1eede
		'--color-success-300': '207 228 202', // #cfe4ca
		'--color-success-400': '170 208 163', // #aad0a3
		'--color-success-500': '134 188 123', // #86bc7b
		'--color-success-600': '121 169 111', // #79a96f
		'--color-success-700': '101 141 92', // #658d5c
		'--color-success-800': '80 113 74', // #50714a
		'--color-success-900': '66 92 60', // #425c3c
		// warning | #f9de7b
		'--color-warning-50': '254 250 235', // #fefaeb
		'--color-warning-100': '254 248 229', // #fef8e5
		'--color-warning-200': '254 247 222', // #fef7de
		'--color-warning-300': '253 242 202', // #fdf2ca
		'--color-warning-400': '251 232 163', // #fbe8a3
		'--color-warning-500': '249 222 123', // #f9de7b
		'--color-warning-600': '224 200 111', // #e0c86f
		'--color-warning-700': '187 167 92', // #bba75c
		'--color-warning-800': '149 133 74', // #95854a
		'--color-warning-900': '122 109 60', // #7a6d3c
		// error | #db3829
		'--color-error-50': '250 225 223', // #fae1df
		'--color-error-100': '248 215 212', // #f8d7d4
		'--color-error-200': '246 205 202', // #f6cdca
		'--color-error-300': '241 175 169', // #f1afa9
		'--color-error-400': '230 116 105', // #e67469
		'--color-error-500': '219 56 41', // #db3829
		'--color-error-600': '197 50 37', // #c53225
		'--color-error-700': '164 42 31', // #a42a1f
		'--color-error-800': '131 34 25', // #832219
		'--color-error-900': '107 27 20', // #6b1b14
		// surface | #f5a675
		'--color-surface-50': '254 242 234', // #fef2ea
		'--color-surface-100': '253 237 227', // #fdede3
		'--color-surface-200': '253 233 221', // #fde9dd
		'--color-surface-300': '251 219 200', // #fbdbc8
		'--color-surface-400': '248 193 158', // #f8c19e
		'--color-surface-500': '245 166 117', // #f5a675
		'--color-surface-600': '221 149 105', // #dd9569
		'--color-surface-700': '184 125 88', // #b87d58
		'--color-surface-800': '147 100 70', // #936446
		'--color-surface-900': '120 81 57' // #785139
	}
};
