<a name="top"></a>
# HubBoard API v0.1.0

HubBoard API

# Table of contents

- [Auth](#Auth)
  - [Email verification](#Email-verification)
  - [Login](#Login)
  - [Resend verification email](#Resend-verification-email)
  - [User registration](#User-registration)
- [User](#User)
  - [Get profile photo](#Get-profile-photo)
  - [Logout](#Logout)
  - [Modify password](#Modify-password)
  - [Upload profile photo](#Upload-profile-photo)

___


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
| file | `File` | <p>Profile photo</p> |

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

#### Error response - `401`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| message | `String` | <p>&quot;Unauthorized&quot;.</p> |

## <a name='Modify-password'></a> Modify password
[Back to top](#top)

```
POST /api/user/passwordModify
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
POST /api/user/profilePhoto
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| profilePhoto | `File` | <p>Profile photo</p> |
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

