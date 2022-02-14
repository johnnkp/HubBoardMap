<a name="top"></a>
# HubBoard API v0.1.0

HubBoard API

# Table of contents

- [Auth](#Auth)
  - [User registration](#User-registration)

___


# <a name='Auth'></a> Auth

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
| message | `String` | <p>Success message</p> |

### Error response

#### Error response - `409`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| attribute_used_message | `String` | <p>Username or email already used</p> |

#### Error response - `500`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| internal_error | `String` | <p>Internal server error</p> |

