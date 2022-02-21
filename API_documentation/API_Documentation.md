<a name="top"></a>
# HubBoard API v0.1.0

HubBoard API

# Table of contents

- [Auth](#Auth)
  - [Email verification](#Email-verification)
  - [Login](#Login)
  - [User registration](#User-registration)

___


# <a name='Auth'></a> Auth

## <a name='Email-verification'></a> Email verification
[Back to top](#top)

```
GET /auth/emailVerify/:token
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| token | `String` | <p>Token</p> |
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

