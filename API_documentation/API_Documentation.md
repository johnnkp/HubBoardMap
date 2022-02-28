<a name="top"></a>
# HubBoard API v0.0.0

HubBoard API

# Table of contents

- [Admin](#Admin)
  - [Get all user data](#Get-all-user-data)
  - [Reset User Password](#Reset-User-Password)
- [Auth](#Auth)
  - [Email verification](#Email-verification)
  - [Google Authentication](#Google-Authentication)
  - [Google Authentication Callback](#Google-Authentication-Callback)
  - [Login](#Login)
  - [Resend verification email](#Resend-verification-email)
  - [User registration](#User-registration)
- [User](#User)
  - [Get profile photo](#Get-profile-photo)
  - [Logout](#Logout)
  - [Modify password](#Modify-password)
  - [Upload profile photo](#Upload-profile-photo)
  - [Verify if user is authenticated](#Verify-if-user-is-authenticated)

___


# <a name='Admin'></a> Admin

## <a name='Get-all-user-data'></a> Get all user data
[Back to top](#top)

```
GET /api/admin/getAllUser
```
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>True.</p> |
| users | `Object` | <p>User data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>False.</p> |
| message | `String` | <p>Error message.</p> |

## <a name='Reset-User-Password'></a> Reset User Password
[Back to top](#top)

```
PUT /api/admin/resetUserPassword
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `String` | <p>Username of the user to reset password</p> |
| password | `String` | <p>New password to set</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>true</p> |
| message | `String` | <p>Success message</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>false</p> |
| message | `String` | <p>Error message</p> |

# <a name='Auth'></a> Auth

## <a name='Email-verification'></a> Email verification
[Back to top](#top)

```
GET /api/auth/emailVerify/:token
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| token | `String` | <p>Token for verifying email</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>true</p> |
| message | `String` | <p>Success message</p> |

### Error response

#### Error response - `400`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>false</p> |
| message | `String` | <p>Email verification token not provided</p> |

#### Error response - `404`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>false</p> |
| message | `String` | <p>Email verification token not found</p> |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>false</p> |
| message | `String` | <p>Internal server error</p> |

## <a name='Google-Authentication'></a> Google Authentication
[Back to top](#top)

<p>redirects to google authentication page</p>

```
POST /api/auth/google
```

## <a name='Google-Authentication-Callback'></a> Google Authentication Callback
[Back to top](#top)

<p>Handle callback from Google authentication</p>

```
POST /api/auth/google/callback
```

### Query Parameters

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| code | `String` |  |
| scope | `String` |  |
| authuser | `String` |  |
| promote | `String` |  |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>True</p> |
| redirectPage | `String` | <p>Page to redirect</p> |
| message | `String` | <p>Success message</p> |
| email | `String` | <p>User email from Google profile for registration, undefined if login successful.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>False</p> |
| message | `String` | <p>Error message</p> |

## <a name='Login'></a> Login
[Back to top](#top)

<p>API for login operation. Return cookie if success.</p>

```
POST /api/auth/login
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `String` | <p>Username</p> |
| password | `String` | <p>Password</p> |
### Success response

#### Success response - `200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>True</p> |
| message | `String` | <p>Success message</p> |

### Error response

#### Error response - `400`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>False</p> |
| message | `String` | <p>Error message</p> |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>False</p> |
| message | `String` | <p>Internal server error</p> |

## <a name='Resend-verification-email'></a> Resend verification email
[Back to top](#top)

```
POST /api/auth/emailResend
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| email | `String` | <p>Email address to resend a verification email.</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>True.</p> |
| message | `String` | <p>Success message.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>false.</p> |
| message | `String` | <p>Error message.</p> |

## <a name='User-registration'></a> User registration
[Back to top](#top)

```
POST /api/auth/register
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `String` | <p>Username</p> |
| email | `String` | <p>Email</p> |
| password | `String` | <p>Password</p> |
### Success response

#### Success response - `202`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>True</p> |
| message | `String` | <p>Verification email sent</p> |

### Error response

#### Error response - `409`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>False</p> |
| error_attr | `String` | <p>Attribute that cause error</p> |
| message | `String` | <p>Error message</p> |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>False</p> |
| message | `String` | <p>Internal server error</p> |

# <a name='User'></a> User

## <a name='Get-profile-photo'></a> Get profile photo
[Back to top](#top)

```
GET /api/user/profilePhoto/:username
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| username | `String` | **optional** <p>Username of user that you want to get profile photo. If not provided, will return profile photo of current user.</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| file | `File` | <p>Profile photo. If no profile photo exists, will return a default profile photo.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>False</p> |
| message | `String` | <p>Error message</p> |

## <a name='Logout'></a> Logout
[Back to top](#top)

```
POST /api/user/logout
```
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>true.</p> |
| message | `String` | <p>Success message</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>false.</p> |
| message | `String` | <p>Error message.</p> |

## <a name='Modify-password'></a> Modify password
[Back to top](#top)

```
PUT /api/user/passwordModify
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| oldPassword | `String` | <p>Old password</p> |
| newPassword | `String` | <p>New password</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>True</p> |
| message | `String` | <p>Success message</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>False</p> |
| message | `String` | <p>Error message</p> |

## <a name='Upload-profile-photo'></a> Upload profile photo
[Back to top](#top)

```
PUT /api/user/profilePhoto
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| profilePhoto | `File` | <p>Profile photo. A file with a file extension of .jpg, .jpeg, or .png and a size of less than 1 MB.</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>True</p> |
| message | `String` | <p>Success message</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>False</p> |
| message | `String` | <p>Error message</p> |

## <a name='Verify-if-user-is-authenticated'></a> Verify if user is authenticated
[Back to top](#top)

```
POST /api/user/authVerify
```
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>true if user is authenticated</p> |
| message | `String` | <p>message</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| success | `Boolean` | <p>false if user is not authenticated</p> |
| message | `String` | <p>message</p> |

