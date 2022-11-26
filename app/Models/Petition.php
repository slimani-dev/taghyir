<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Tags\HasTags;

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
 * @property \Illuminate\Database\Eloquent\Collection|\Spatie\Tags\Tag[] $tags
 * @property-read int|null $tags_count
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
 * @method static \Illuminate\Database\Eloquent\Builder|Petition withAllTags(\ArrayAccess|\Spatie\Tags\Tag|array|string $tags, ?string $type = null)
 * @method static \Illuminate\Database\Eloquent\Builder|Petition withAllTagsOfAnyType($tags)
 * @method static \Illuminate\Database\Eloquent\Builder|Petition withAnyTags(\ArrayAccess|\Spatie\Tags\Tag|array|string $tags, ?string $type = null)
 * @method static \Illuminate\Database\Eloquent\Builder|Petition withAnyTagsOfAnyType($tags)
 * @method static \Illuminate\Database\Eloquent\Builder|Petition withoutTags(\ArrayAccess|\Spatie\Tags\Tag|array|string $tags, ?string $type = null)
 * @mixin \Eloquent
 */
class Petition extends Model
{
    use HasFactory,HasTags;
}
