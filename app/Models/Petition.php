<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Petition
 *
 * @property int $id
 * @property int $user_id
 * @property string $title
 * @property string|null $excerpt
 * @property string $text
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Petition newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Petition newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Petition query()
 * @method static \Illuminate\Database\Eloquent\Builder|Petition whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Petition whereExcerpt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Petition whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Petition whereText($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Petition whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Petition whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Petition whereUserId($value)
 * @mixin \Eloquent
 */
class Petition extends Model
{
    use HasFactory;
}
